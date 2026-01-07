import { Schema, model, Types } from 'mongoose';

export interface IRolePermission {
  roleId: Types.ObjectId;
  permissionId: Types.ObjectId;
}

const RolePermissionSchema = new Schema<IRolePermission>({
  roleId: { type: Schema.Types.ObjectId, ref: 'Role', required: true, index: true },
  permissionId: { type: Schema.Types.ObjectId, ref: 'Permission', required: true, index: true },
});
RolePermissionSchema.index({ roleId: 1, permissionId: 1 }, { unique: true });

export default model<IRolePermission>('RolePermission', RolePermissionSchema);
