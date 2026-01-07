import { z } from 'zod';
export declare const productSchema: z.ZodObject<
  {
    name: z.ZodString;
    sku: z.ZodString;
    category: z.ZodString;
    price: z.ZodNumber;
    cost: z.ZodNumber;
    quantity: z.ZodNumber;
    minStock: z.ZodNumber;
    image: z.ZodOptional<z.ZodString>;
  },
  z.core.$strip
>;
