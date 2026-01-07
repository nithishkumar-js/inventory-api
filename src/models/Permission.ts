import { Schema, model, Types } from 'mongoose';

export interface IPermission {
  _id: Types.ObjectId;
  name: string; // e.g., 'product:create'
  description: string;
}

const PermissionSchema = new Schema<IPermission>({
  name: { type: String, required: true, unique: true, index: true },
  description: { type: String },
});

export default model<IPermission>('Permission', PermissionSchema);
