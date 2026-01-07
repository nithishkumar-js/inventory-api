import { Types } from 'mongoose';
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
declare const _default: import('mongoose').Model<
  ISale,
  {},
  {},
  {},
  import('mongoose').Document<unknown, {}, ISale, {}, {}> &
    ISale &
    Required<{
      _id: Types.ObjectId;
    }> & {
      __v: number;
    },
  any
>;
export default _default;
