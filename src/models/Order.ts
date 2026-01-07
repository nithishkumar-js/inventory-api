import { Schema, model, Types } from 'mongoose';

export interface IOrderItem {
  productId: Types.ObjectId;
  productName: string;
  quantity: number;
  price: number;
}

export interface IOrder {
  _id: Types.ObjectId;
  orderNumber: string;
  customer: { name: string; email: string };
  items: IOrderItem[];
  total: number;
  status: string;
  paidAt?: Date;
  shippedAt?: Date;
  deliveredAt?: Date;
  cancelledAt?: Date;
  cancellationReason?: string;
  deletedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema = new Schema<IOrder>(
  {
    orderNumber: { type: String, required: true, unique: true, index: true },
    customer: {
      name: { type: String, required: true },
      email: { type: String, required: true },
    },
    items: [
      {
        productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        productName: String,
        quantity: Number,
        price: Number,
      },
    ],
    total: { type: Number, required: true },
    status: {
      type: String,
      enum: ['pending', 'paid', 'processing', 'shipped', 'delivered', 'cancelled'],
      default: 'pending',
    },
    paidAt: { type: Date },
    shippedAt: { type: Date },
    deliveredAt: { type: Date },
    cancelledAt: { type: Date },
    cancellationReason: { type: String },
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true, optimisticConcurrency: true },
);

OrderSchema.index({ status: 1, createdAt: -1 });
OrderSchema.index({ deletedAt: 1 });

export default model<IOrder>('Order', OrderSchema);
