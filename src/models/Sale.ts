import { Schema, model, Types } from 'mongoose';

export interface ISale {
  _id: Types.ObjectId;
  orderId: Types.ObjectId;
  amount: number;
  cost: number;
  revenue: number;
  profit: number;
  date: Date;
  bucket: string;
}

const SaleSchema = new Schema<ISale>({
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

export default model<ISale>('Sale', SaleSchema);
