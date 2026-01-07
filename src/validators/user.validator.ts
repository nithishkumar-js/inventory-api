import Joi from 'joi';
import { z } from 'zod';
export const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const roleSchema = z.object({
  role: z.enum(['admin', 'manager', 'staff']),
});
