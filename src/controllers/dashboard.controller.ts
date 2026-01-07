import Product from '../models/Product.js';
import Order from '../models/Order.js';
import Sale from '../models/Sale.js';
import type { Request, Response } from 'express';

export const getStats = async (req: Request, res: Response) => {
  try {
    const productsCount = await Product.countDocuments();
    const ordersCount = await Order.countDocuments();
    const revenueAgg = await Sale.aggregate([
      { $group: { _id: null, total: { $sum: '$amount' } } },
    ]);
    const revenue = revenueAgg[0]?.total || 0;
    const lowStock = await Product.countDocuments({ stock: { $lt: 10 } });

    res.json({
      success: true,
      data: {
        products: productsCount,
        orders: ordersCount,
        revenue,
        lowStock,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Dashboard stats error' });
  }
};

export const getSales = async (req: Request, res: Response) => {
  try {
    const sales = await Sale.find().sort({ date: -1 }).limit(20);
    res.json({ success: true, data: sales });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Sales fetch error' });
  }
};

export const getTopProducts = async (req: Request, res: Response) => {
  try {
    const topProducts = await Product.find().sort({ sold: -1 }).limit(5);
    res.json({ success: true, data: topProducts });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Top products fetch error' });
  }
};
