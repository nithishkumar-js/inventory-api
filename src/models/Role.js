import { Schema, model, Types } from 'mongoose';
const RoleSchema = new Schema({
  name: { type: String, required: true, unique: true, index: true },
  description: { type: String },
});
export default model('Role', RoleSchema);
