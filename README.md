# Inventory Management System

## Overview
This is a full-stack inventory management application designed for small businesses and warehouses. It provides robust features for managing products, users, orders, roles, and dashboard analytics. The backend is built with Node.js, Express, MongoDB, and Mongoose, while the frontend uses React and Vite.

---

## Features
- **Authentication & Authorization**: JWT-based login/signup, role-based access control (RBAC)
- **User Management**: CRUD operations, role assignment (admin, manager, staff)
- **Product Management**: CRUD operations, stock tracking, low stock alerts
- **Order Management**: Create, update, and track orders
- **Dashboard**: Stats, sales, top products, recent orders
- **Validation**: Zod-based request validation
- **Error Handling**: Centralized error middleware
- **API Documentation**: Postman collection for all endpoints
- **Mock Data**: Data import script for development/testing

---


## Models Structure

### User
```typescript
const UserSchema = new Schema({
   name: String,
   email: { type: String, unique: true },
   password: String,
   lastActive: Date
}, { timestamps: true });
```

### Product
```typescript
const ProductSchema = new Schema({
   name: String,
   sku: { type: String, unique: true },
   category: String,
   price: Number,
   cost: Number,
   quantity: Number,
   minStock: Number,
   image: String
}, { timestamps: true });
```

### Order
```typescript
const OrderSchema = new Schema({
   orderNumber: { type: String, unique: true },
   customer: {
      name: String,
      email: String
   },
   items: [{
      productId: { type: Schema.Types.ObjectId, ref: 'Product' },
      productName: String,
      quantity: Number,
      price: Number
   }],
   total: Number,
   status: { type: String, enum: ['pending','processing','shipped','delivered','cancelled'], default: 'pending' }
}, { timestamps: true });
```

### UserRole
```typescript
const UserRoleSchema = new Schema({
   userId: { type: Schema.Types.ObjectId, ref: 'User' },
   role: { type: String, enum: ['admin','manager','staff'], required: true }
});
```

### RefreshToken
```typescript
const RefreshTokenSchema = new Schema({
   userId: { type: Schema.Types.ObjectId, ref: 'User' },
   token: String,
   expiresAt: Date,
   revoked: { type: Boolean, default: false }
}, { timestamps: true });
```

### Sale
```typescript
const SaleSchema = new Schema({
   orderId: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
   amount: { type: Number, required: true },
   profit: { type: Number, required: true },
   date: { type: Date, default: Date.now }
});
```

## Frontend Setup

1. **Install dependencies**
   ```bash
   cd stock-guardian-prime-main
   npm install
   ```
2. **Run the frontend**
   ```bash
   npm run dev
   ```
3. **Access the app**
   - Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## API Endpoints

- **Auth**
  - `POST /api/auth/register` - Register new user
  - `POST /api/auth/login` - Login
  - `POST /api/auth/logout` - Logout
  - `GET /api/auth/me` - Get current user
- **Users**
  - `GET /api/users` - List users
  - `POST /api/users` - Create user
  - `GET /api/users/:id` - Get user
  - `PUT /api/users/:id` - Update user
  - `DELETE /api/users/:id` - Delete user
  - `PUT /api/users/:id/role` - Change user role
- **Products**
  - `GET /api/products` - List products
  - `POST /api/products` - Create product
  - `GET /api/products/:id` - Get product
  - `PUT /api/products/:id` - Update product
  - `DELETE /api/products/:id` - Delete product
  - `GET /api/products/low-stock` - Low stock alert
- **Orders**
  - `GET /api/orders` - List orders
  - `POST /api/orders` - Create order
  - `GET /api/orders/:id` - Get order
  - `PUT /api/orders/:id` - Update order
  - `DELETE /api/orders/:id` - Delete order
  - `PUT /api/orders/:id/status` - Update order status
- **Dashboard**
  - `GET /api/dashboard/stats` - Stats
  - `GET /api/dashboard/sales` - Sales
  - `GET /api/dashboard/top-products` - Top products

---

## RBAC (Role-Based Access Control)
- **Admin**: Full access to all endpoints
- **Manager**: Can manage products and orders
- **Staff**: Can view products/orders, limited write access
- See Postman collection for endpoint-specific RBAC notes

---

## Validation & Error Handling
- All create/update endpoints use Zod validation
- Centralized error handler returns JSON with error code/message

---

## Testing & API Documentation
- Use the provided Postman collection (`postman_collection.json`) for API testing
- All endpoints, request/response formats, and RBAC notes are included

---

## Data Import
- Use `data-import.js` to seed 100 mock products, users, and orders
- Requires MongoDB running locally

---

## Contribution & Development
- Fork the repo, create a feature branch, and submit PRs
- Follow code style and commit guidelines
- For questions, open an issue

---

## License
MIT
# inventory-api
# inventory-api
