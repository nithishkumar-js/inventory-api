export declare const register: (data: any) => Promise<
  import('mongoose').Document<unknown, {}, import('../models/User.js').IUser, {}, {}> &
    import('../models/User.js').IUser &
    Required<{
      _id: import('mongoose').Types.ObjectId;
    }> & {
      __v: number;
    }
>;
export declare const login: (
  email: string,
  password: string,
) => Promise<{
  accessToken: string;
}>;
