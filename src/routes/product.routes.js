import { Router } from 'express';
import { productSchema } from '../validators/product.validator.js';
import { validate } from '../middlewares/validation.middleware.js';
import * as productController from '../controllers/product.controller.js';
const r = Router();
/**
 * @swagger
 * /api/products/low-stock:
 *   get:
 *     summary: Get low stock products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of low stock products
 */
r.get('/low-stock', productController.getLowStockProducts);
/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of products
 */
r.get('/', productController.getAllProducts);
/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get single product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product details
 */
r.get('/:id', productController.getProductById);
/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Delete product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product deleted
 */
r.delete('/:id', productController.deleteProductById);
/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               stock:
 *                 type: number
 *     responses:
 *       201:
 *         description: Product created
 */
r.post('/', validate(productSchema), productController.createProduct);
/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Update product by ID
 *     tags: [Products]
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
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               stock:
 *                 type: number
 *     responses:
 *       200:
 *         description: Product updated
 */
r.put('/:id', validate(productSchema), productController.updateProductById);
export default r;
