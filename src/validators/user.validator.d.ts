import Joi from 'joi';
import { z } from 'zod';
export declare const userSchema: Joi.ObjectSchema<any>;
export declare const roleSchema: z.ZodObject<
  {
    role: z.ZodEnum<{
      staff: 'staff';
      admin: 'admin';
      manager: 'manager';
    }>;
  },
  z.core.$strip
>;
