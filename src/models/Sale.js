import { Schema, model, Types } from 'mongoose';
const SaleSchema = new Schema({
  orderId: { type: Schema.Types.ObjectId, ref: 'Order', required: true, index: true },
  amount: { type: Number, required: true },
  cost: { type: Number, required: true },
  revenue: { type: Number, required: true },
  profit: { type: Number, required: true },
  date: { type: Date, default: Date.now, index: true },
  bucket: { type: String, index: true }, // e.g., '2026-01' for monthly aggregation
});
SaleSchema.index({ date: 1, bucket: 1 });
SaleSchema.index({ profit: -1 });
export default model('Sale', SaleSchema);
