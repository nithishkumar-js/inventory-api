import * as service from '../services/auth.service.js';

export const register = async (req: any, res: any) => {
  const user = await service.register(req.body);
  res.json({ success: true, data: user });
};

export const login = async (req: any, res: any) => {
  const token = await service.login(req.body.email, req.body.password);
  res.json({ success: true, data: token });
};
