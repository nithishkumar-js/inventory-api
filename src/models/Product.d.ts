import { Types } from 'mongoose';
export interface IProduct {
  _id: Types.ObjectId;
  name: string;
  sku: string;
  category: string;
  price: number;
  cost: number;
  quantity: number;
  minStock: number;
  image?: string;
  isActive: boolean;
  deletedAt?: Date;
  stockHistory: Array<{
    date: Date;
    quantity: number;
    reason: string;
  }>;
  priceHistory: Array<{
    date: Date;
    price: number;
  }>;
  warehouses: Array<{
    warehouseId: Types.ObjectId;
    quantity: number;
  }>;
  createdAt: Date;
  updatedAt: Date;
}
declare const _default: import('mongoose').Model<
  IProduct,
  {},
  {},
  {},
  import('mongoose').Document<unknown, {}, IProduct, {}, {}> &
    IProduct &
    Required<{
      _id: Types.ObjectId;
    }> & {
      __v: number;
    },
  any
>;
export default _default;
