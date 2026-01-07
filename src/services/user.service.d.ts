export declare function getAllUsers(): Promise<
  (import('mongoose').Document<unknown, {}, import('../models/User.js').IUser, {}, {}> &
    import('../models/User.js').IUser &
    Required<{
      _id: import('mongoose').Types.ObjectId;
    }> & {
      __v: number;
    })[]
>;
