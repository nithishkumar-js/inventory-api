import { Schema, model, Types } from 'mongoose';

export interface IUserRole {
  userId: Types.ObjectId;
  roleId: Types.ObjectId;
  role: string;
}

const UserRoleSchema = new Schema<IUserRole>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  roleId: { type: Schema.Types.ObjectId, ref: 'Role', required: true, index: true },
});
UserRoleSchema.index({ userId: 1, roleId: 1 }, { unique: true });

export default model<IUserRole>('UserRole', UserRoleSchema);
