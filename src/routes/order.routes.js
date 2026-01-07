import { Router } from 'express';
import { orderSchema } from '../validators/order.validator.js';
import { validate } from '../middlewares/validation.middleware.js';
import * as orderController from '../controllers/order.controller.js';
import Order from '../models/Order.js';
const r = Router();
/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: List of orders
 */
r.get('/', orderController.getAllOrders);
/**
 * @swagger
 * /api/orders/{id}:
 *   get:
 *     summary: Get single order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order details
 */
r.get('/:id', orderController.getOrderById);
/**
 * @swagger
 * /api/orders/{id}/status:
 *   put:
 *     summary: Update order status
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Order status updated
 */
r.put('/:id/status', orderController.updateOrderStatus);
/**
 * @swagger
 * /api/orders/{id}:
 *   delete:
 *     summary: Delete order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order deleted
 */
r.delete('/:id', orderController.deleteOrderById);
/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Create an order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *               total:
 *                 type: number
 *     responses:
 *       201:
 *         description: Order created
 */
r.post('/', validate(orderSchema), orderController.createOrder);
/**
 * @swagger
 * /api/orders/{id}:
 *   put:
 *     summary: Update order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Order updated
 */
r.put('/:id', validate(orderSchema), orderController.updateOrderById);
r.delete('/:id', async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});
export default r;
