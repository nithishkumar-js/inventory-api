import { Schema, model, Types } from 'mongoose';

export interface IUser {
  _id: Types.ObjectId;
  name: string;
  email: string;
  role?: string;
  emailNormalized: string;
  password: string;
  passwordVersion: number;
  failedLoginAttempts: number;
  accountLockedUntil?: Date;
  lastLoginAt?: Date;
  isActive: boolean;
  deletedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  createdBy?: Types.ObjectId;
  updatedBy?: Types.ObjectId;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, index: true, lowercase: true, trim: true },
    emailNormalized: { type: String, required: true, index: true },
    password: { type: String, required: true },
    passwordVersion: { type: Number, default: 1 },
    failedLoginAttempts: { type: Number, default: 0 },
    accountLockedUntil: { type: Date },
    lastLoginAt: { type: Date },
    isActive: { type: Boolean, default: true },
    deletedAt: { type: Date, default: null },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true },
);

UserSchema.index({ email: 1 }, { unique: true });
UserSchema.index({ emailNormalized: 1 });
UserSchema.index({ isActive: 1, deletedAt: 1 });

export default model<IUser>('User', UserSchema);
