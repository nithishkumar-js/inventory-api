import { Schema, model, Types } from 'mongoose';
const AuditLogSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  action: { type: String, required: true },
  entityType: { type: String, required: true },
  entityId: { type: Schema.Types.ObjectId, required: true },
  oldValue: { type: Schema.Types.Mixed },
  newValue: { type: Schema.Types.Mixed },
  ip: { type: String },
  userAgent: { type: String },
  createdAt: { type: Date, default: Date.now, index: true },
});
AuditLogSchema.index({ entityType: 1, entityId: 1, createdAt: -1 });
AuditLogSchema.index({ userId: 1, createdAt: -1 });
export default model('AuditLog', AuditLogSchema);
