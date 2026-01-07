import { Router } from 'express';
import * as dashboardController from '../controllers/dashboard.controller.js';
const r = Router();
/**
 * @swagger
 * /api/dashboard/stats:
 *   get:
 *     summary: Get dashboard stats
 *     tags: [Dashboard]
 *     responses:
 *       200:
 *         description: Dashboard statistics
 */
r.get('/stats', dashboardController.getStats);
/**
 * @swagger
 * /api/dashboard/sales:
 *   get:
 *     summary: Get sales data
 *     tags: [Dashboard]
 *     responses:
 *       200:
 *         description: Sales data
 */
r.get('/sales', dashboardController.getSales);
/**
 * @swagger
 * /api/dashboard/top-products:
 *   get:
 *     summary: Get top products
 *     tags: [Dashboard]
 *     responses:
 *       200:
 *         description: Top products data
 */
r.get('/top-products', dashboardController.getTopProducts);
export default r;
