import jwt from 'jsonwebtoken';
import { JWT_CONFIG } from '../config/jwt.js';

export const authMiddleware = (req: any, res: any, next: any) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ success: false });
  try {
    req.user = jwt.verify(token, JWT_CONFIG.ACCESS_SECRET);
    next();
  } catch {
    res.status(401).json({ success: false });
  }
};
