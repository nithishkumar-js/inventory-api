import { Schema, model, Types } from 'mongoose';
const ProductSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    sku: { type: String, required: true, unique: true, uppercase: true, trim: true, index: true },
    category: { type: String, required: true, index: true },
    price: { type: Number, required: true },
    cost: { type: Number, required: true },
    quantity: { type: Number, required: true },
    minStock: { type: Number, default: 1 },
    image: { type: String },
    isActive: { type: Boolean, default: true },
    deletedAt: { type: Date, default: null },
    stockHistory: [
      {
        date: { type: Date, default: Date.now },
        quantity: Number,
        reason: String,
      },
    ],
    priceHistory: [
      {
        date: { type: Date, default: Date.now },
        price: Number,
      },
    ],
    warehouses: [
      {
        warehouseId: { type: Schema.Types.ObjectId, ref: 'Warehouse' },
        quantity: Number,
      },
    ],
  },
  { timestamps: true, optimisticConcurrency: true },
);
ProductSchema.index({ category: 1, name: 1 });
ProductSchema.index({ isActive: 1, deletedAt: 1 });
export default model('Product', ProductSchema);
