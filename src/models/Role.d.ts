import { Types } from 'mongoose';
export interface IRole {
  _id: Types.ObjectId;
  name: string;
  description: string;
}
declare const _default: import('mongoose').Model<
  IRole,
  {},
  {},
  {},
  import('mongoose').Document<unknown, {}, IRole, {}, {}> &
    IRole &
    Required<{
      _id: Types.ObjectId;
    }> & {
      __v: number;
    },
  any
>;
export default _default;
