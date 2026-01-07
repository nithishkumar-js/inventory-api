import { Schema, model, Types } from 'mongoose';

export interface IRole {
  _id: Types.ObjectId;
  name: string; // e.g., 'admin'
  description: string;
}

const RoleSchema = new Schema<IRole>({
  name: { type: String, required: true, unique: true, index: true },
  description: { type: String },
});

export default model<IRole>('Role', RoleSchema);
