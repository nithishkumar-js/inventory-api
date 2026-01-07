import { Schema, model, Types } from 'mongoose';
const RefreshTokenSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  tokenHash: { type: String, required: true, index: true }, // Store hash, not raw token
  device: { type: String },
  ip: { type: String },
  userAgent: { type: String },
  expiresAt: { type: Date, required: true, index: true },
  revoked: { type: Boolean, default: false },
  replacedByToken: { type: String },
  createdAt: { type: Date, default: Date.now },
});
RefreshTokenSchema.index({ userId: 1, tokenHash: 1 }, { unique: true });
RefreshTokenSchema.index({ expiresAt: 1 });
export default model('RefreshToken', RefreshTokenSchema);
