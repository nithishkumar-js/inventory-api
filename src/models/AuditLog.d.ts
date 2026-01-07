import { Types } from 'mongoose';
export interface IAuditLog {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  action: string;
  entityType: string;
  entityId: Types.ObjectId;
  oldValue: any;
  newValue: any;
  ip: string;
  userAgent: string;
  createdAt: Date;
}
declare const _default: import('mongoose').Model<
  IAuditLog,
  {},
  {},
  {},
  import('mongoose').Document<unknown, {}, IAuditLog, {}, {}> &
    IAuditLog &
    Required<{
      _id: Types.ObjectId;
    }> & {
      __v: number;
    },
  any
>;
export default _default;
