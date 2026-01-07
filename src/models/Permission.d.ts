import { Types } from 'mongoose';
export interface IPermission {
  _id: Types.ObjectId;
  name: string;
  description: string;
}
declare const _default: import('mongoose').Model<
  IPermission,
  {},
  {},
  {},
  import('mongoose').Document<unknown, {}, IPermission, {}, {}> &
    IPermission &
    Required<{
      _id: Types.ObjectId;
    }> & {
      __v: number;
    },
  any
>;
export default _default;
