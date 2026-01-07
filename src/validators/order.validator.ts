import { z } from 'zod';

export const orderSchema = z.object({
  orderNumber: z.string().min(1).optional(),
  customer: z.object({
    name: z.string().min(1),
    email: z.string().email(),
  }),
  items: z.array(
    z.object({
      productId: z.string().min(1),
      productName: z.string().min(1),
      quantity: z.number().int().positive(),
      price: z.number().nonnegative(),
    }),
  ),
  total: z.number().nonnegative(),
  status: z.enum(['pending', 'processing', 'shipped', 'delivered', 'cancelled']).optional(),
});
