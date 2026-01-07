import type { Request, Response, NextFunction } from 'express';
export declare const getAllUsers: (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void>;
export declare const getUserById: (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const createUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const updateUserById: (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteUserById: (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const changeUserRole: (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<Response<any, Record<string, any>> | undefined>;
