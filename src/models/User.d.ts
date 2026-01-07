import { Types } from 'mongoose';
export interface IUser {
  _id: Types.ObjectId;
  name: string;
  email: string;
  role?: string;
  emailNormalized: string;
  password: string;
  passwordVersion: number;
  failedLoginAttempts: number;
  accountLockedUntil?: Date;
  lastLoginAt?: Date;
  isActive: boolean;
  deletedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  createdBy?: Types.ObjectId;
  updatedBy?: Types.ObjectId;
}
declare const _default: import('mongoose').Model<
  IUser,
  {},
  {},
  {},
  import('mongoose').Document<unknown, {}, IUser, {}, {}> &
    IUser &
    Required<{
      _id: Types.ObjectId;
    }> & {
      __v: number;
    },
  any
>;
export default _default;
