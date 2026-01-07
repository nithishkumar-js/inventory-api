import type { Request, Response } from 'express';
export declare const getAllProducts: (req: Request, res: Response) => Promise<void>;
export declare const getProductById: (
  req: Request,
  res: Response,
) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteProductById: (
  req: Request,
  res: Response,
) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getLowStockProducts: (req: Request, res: Response) => Promise<void>;
export declare const createProduct: (req: Request, res: Response) => Promise<void>;
export declare const updateProductById: (
  req: Request,
  res: Response,
) => Promise<Response<any, Record<string, any>> | undefined>;
