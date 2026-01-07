import { Types } from 'mongoose';
export interface IRolePermission {
  roleId: Types.ObjectId;
  permissionId: Types.ObjectId;
}
declare const _default: import('mongoose').Model<
  IRolePermission,
  {},
  {},
  {},
  import('mongoose').Document<unknown, {}, IRolePermission, {}, {}> &
    IRolePermission & {
      _id: Types.ObjectId;
    } & {
      __v: number;
    },
  any
>;
export default _default;
