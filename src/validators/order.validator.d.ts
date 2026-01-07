import { z } from 'zod';
export declare const orderSchema: z.ZodObject<
  {
    orderNumber: z.ZodOptional<z.ZodString>;
    customer: z.ZodObject<
      {
        name: z.ZodString;
        email: z.ZodString;
      },
      z.core.$strip
    >;
    items: z.ZodArray<
      z.ZodObject<
        {
          productId: z.ZodString;
          productName: z.ZodString;
          quantity: z.ZodNumber;
          price: z.ZodNumber;
        },
        z.core.$strip
      >
    >;
    total: z.ZodNumber;
    status: z.ZodOptional<
      z.ZodEnum<{
        pending: 'pending';
        processing: 'processing';
        shipped: 'shipped';
        delivered: 'delivered';
        cancelled: 'cancelled';
      }>
    >;
  },
  z.core.$strip
>;
