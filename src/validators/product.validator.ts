import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(1),
  sku: z.string().min(1),
  category: z.string().min(1),
  price: z.number().nonnegative(),
  cost: z.number().nonnegative(),
  quantity: z.number().int().nonnegative(),
  minStock: z.number().int().nonnegative(),
  image: z.string().optional(),
});
