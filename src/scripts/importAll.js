import mongoose from 'mongoose';
import User from '../models/User.js';
import Product from '../models/Product.js';
import Order from '../models/Order.js';
import Role from '../models/Role.js';
import Permission from '../models/Permission.js';
const MONGO_URI = 'mongodb://localhost:27017/inventory'; // Update if needed
async function main() {
  await mongoose.connect(MONGO_URI);
  // Roles
  const roles = ['admin', 'manager', 'staff'].map((name, i) => ({
    name,
    description: `${name.charAt(0).toUpperCase() + name.slice(1)} role`,
  }));
  await Role.deleteMany({});
  const insertedRoles = await Role.insertMany(roles);
  // Permissions
  const permissions = Array.from({ length: 10 }).map((_, i) => ({
    name: `perm${i + 1}`,
    description: `Permission ${i + 1}`,
  }));
  await Permission.deleteMany({});
  await Permission.insertMany(permissions);
  // Users
  await User.deleteMany({});
  const users = Array.from({ length: 100 }).map((_, i) => ({
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    emailNormalized: `user${i + 1}@example.com`,
    password: 'hashedpassword',
    passwordVersion: 1,
    failedLoginAttempts: 0,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
  const insertedUsers = await User.insertMany(users);
  // Products
  await Product.deleteMany({});
  const products = Array.from({ length: 100 }).map((_, i) => ({
    name: `Product ${i + 1}`,
    sku: `SKU${1000 + i}`,
    category: `Category${(i % 5) + 1}`,
    price: Math.floor(Math.random() * 1000) + 10,
    cost: Math.floor(Math.random() * 800) + 5,
    quantity: Math.floor(Math.random() * 100) + 1,
    minStock: Math.floor(Math.random() * 10) + 1,
    image: `https://picsum.photos/seed/${i}/200/200`,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
  const insertedProducts = await Product.insertMany(products);
  // Orders
  await Order.deleteMany({});
  const orders = Array.from({ length: 100 }).map((_, i) => ({
    orderNumber: `ORD${1000 + i}`,
    customer: {
      name: insertedUsers[i % insertedUsers.length]?.name ?? `User`,
      email: insertedUsers[i % insertedUsers.length]?.email ?? `user@example.com`,
    },
    items: [
      {
        productId: (insertedProducts[i % insertedProducts.length] ?? insertedProducts[0])._id,
        productName:
          (insertedProducts[i % insertedProducts.length] ?? insertedProducts[0])?.name ??
          'Unknown Product',
        quantity: Math.floor(Math.random() * 5) + 1,
        price:
          insertedProducts[i % insertedProducts.length]?.price ?? insertedProducts[0]?.price ?? 0,
      },
    ],
    total: insertedProducts[i % insertedProducts.length]?.price ?? 0,
    status: 'pending',
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
  await Order.insertMany(orders);
  console.log('Inserted 100 records for each collection!');
  await mongoose.disconnect();
}
main().catch((err) => {
  console.error(err);
  process.exit(1);
});
