import { Types } from 'mongoose';
export interface IRefreshToken {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  tokenHash: string;
  device: string;
  ip: string;
  userAgent: string;
  expiresAt: Date;
  revoked: boolean;
  replacedByToken?: string;
  createdAt: Date;
}
declare const _default: import('mongoose').Model<
  IRefreshToken,
  {},
  {},
  {},
  import('mongoose').Document<unknown, {}, IRefreshToken, {}, {}> &
    IRefreshToken &
    Required<{
      _id: Types.ObjectId;
    }> & {
      __v: number;
    },
  any
>;
export default _default;
