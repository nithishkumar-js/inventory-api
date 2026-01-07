import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import type { SignOptions } from 'jsonwebtoken';
import type { Secret } from 'jsonwebtoken';
import User from '../models/User.js';
import UserRole from '../models/UserRole.js';
import Role from '../models/Role.js';
import RolePermission from '../models/RolePermission.js';
import Permission from '../models/Permission.js';
import { JWT_CONFIG } from '../config/jwt.js';

// Helper to normalize email
function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export const register = async (data: any) => {
  const hashed = await bcrypt.hash(data.password, 12);
  const emailNormalized = normalizeEmail(data.email);
  // Default role: staff
  const staffRole = await Role.findOne({ name: 'staff' });
  if (!staffRole) throw new Error('Staff role not found');
  const user = await User.create({
    ...data,
    email: data.email,
    emailNormalized,
    password: hashed,
    passwordVersion: 1,
    failedLoginAttempts: 0,
    isActive: true,
    deletedAt: null,
  });
  await UserRole.create({ userId: user._id, roleId: staffRole._id });
  return user;
};

export const login = async (email: string, password: string) => {
  const emailNormalized = normalizeEmail(email);
  const user = await User.findOne({ emailNormalized });
  if (!user || !user.isActive || user.deletedAt) throw new Error('Invalid');
  if (user.accountLockedUntil && user.accountLockedUntil > new Date()) {
    throw new Error('Account locked. Try again later.');
  }
  const ok = await bcrypt.compare(password, user.password ?? '');
  if (!ok) {
    user.failedLoginAttempts += 1;
    // Lock account after 5 failed attempts for 15 minutes
    if (user.failedLoginAttempts >= 5) {
      user.accountLockedUntil = new Date(Date.now() + 15 * 60 * 1000);
    }
    await user.save();
    throw new Error('Invalid');
  }
  user.failedLoginAttempts = 0;
  user.lastLoginAt = new Date();
  await user.save();

  // Get all roles for user
  const userRoles = await UserRole.find({ userId: user._id });
  const roleIds = userRoles.map((r) => r.roleId);
  const roles = await Role.find({ _id: { $in: roleIds } });
  // Get all permissions for user
  const rolePermissions = await RolePermission.find({ roleId: { $in: roleIds } });
  const permissionIds = rolePermissions.map((rp) => rp.permissionId);
  const permissions = await Permission.find({ _id: { $in: permissionIds } });

  const secret = JWT_CONFIG.ACCESS_SECRET || 'defaultsecret';
  const options: SignOptions = { expiresIn: JWT_CONFIG.ACCESS_EXPIRES_IN as any };
  const accessToken = jwt.sign(
    {
      id: user._id,
      roles: roles.map((r) => r.name),
      permissions: permissions.map((p) => p.name),
      passwordVersion: user.passwordVersion,
    },
    secret,
    options,
  );
  return { accessToken };
};
