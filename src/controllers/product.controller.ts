import Product from '../models/Product.js';
import type { Request, Response } from 'express';

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json({ success: true, data: products });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ success: false, message });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, data: product });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ success: false, message });
  }
};

export const deleteProductById = async (req: Request, res: Response) => {
  try {
    const result = await Product.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ success: false, message });
  }
};

export const getLowStockProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({ $expr: { $lte: ['$quantity', '$minStock'] } });
    res.json({ success: true, data: products });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ success: false, message });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, data: product });
  } catch (err) {
    console.log(err);
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(400).json({ success: false, message });
  }
};

export const updateProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, data: product });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(400).json({ success: false, message });
  }
};
