import { Types } from 'mongoose';
export interface IUserRole {
  userId: Types.ObjectId;
  roleId: Types.ObjectId;
  role: string;
}
declare const _default: import('mongoose').Model<
  IUserRole,
  {},
  {},
  {},
  import('mongoose').Document<unknown, {}, IUserRole, {}, {}> &
    IUserRole & {
      _id: Types.ObjectId;
    } & {
      __v: number;
    },
  any
>;
export default _default;
