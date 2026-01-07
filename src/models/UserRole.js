import { Schema, model, Types } from 'mongoose';
const UserRoleSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  roleId: { type: Schema.Types.ObjectId, ref: 'Role', required: true, index: true },
});
UserRoleSchema.index({ userId: 1, roleId: 1 }, { unique: true });
export default model('UserRole', UserRoleSchema);
