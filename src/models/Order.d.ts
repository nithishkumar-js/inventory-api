import { Types } from 'mongoose';
export interface IOrderItem {
  productId: Types.ObjectId;
  productName: string;
  quantity: number;
  price: number;
}
export interface IOrder {
  _id: Types.ObjectId;
  orderNumber: string;
  customer: {
    name: string;
    email: string;
  };
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
declare const _default: import('mongoose').Model<
  IOrder,
  {},
  {},
  {},
  import('mongoose').Document<unknown, {}, IOrder, {}, {}> &
    IOrder &
    Required<{
      _id: Types.ObjectId;
    }> & {
      __v: number;
    },
  any
>;
export default _default;
