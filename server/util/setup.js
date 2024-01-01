import Database from '../database.js';
import Users from '../models/Users.js';
import Orders from '../models/Orders.js';
import OrderDetails from '../models/OrderDetails.js';
import Deliveries from '../models/Deliveries.js';
import Products from '../models/Products.js';
import Suppliers from '../models/Suppliers.js';
import SupplierProducts from '../models/SupplierProducts.js';
import Inventory from '../models/Inventory.js';
import Permissions from '../models/Permissions.js';

// Run this Script to initialize and create the database with tables in mysql

(async () => {
 try {
  // Suppliers to Supplier_Products (One-to-Many)
  Suppliers.hasMany(SupplierProducts, { foreignKey: 'SupplierID' });
  SupplierProducts.belongsTo(Suppliers, { foreignKey: 'SupplierID' });

  // Products to Supplier_Products (One-to-Many)
  Products.hasMany(SupplierProducts, { foreignKey: 'ProductID' });
  SupplierProducts.belongsTo(Products, { foreignKey: 'ProductID' });

  // Products to Inventory (One-to-One)
  Products.hasOne(Inventory, { foreignKey: 'ProductID' });
  Inventory.belongsTo(Products, { foreignKey: 'ProductID' });

  // Orders to Order_Details (One-to-Many)
  Orders.hasMany(OrderDetails, { foreignKey: 'OrderID' });
  OrderDetails.belongsTo(Orders, { foreignKey: 'OrderID' });

  // Products to Order_Details (One-to-Many)
  Products.hasMany(OrderDetails, { foreignKey: 'ProductID' });
  OrderDetails.belongsTo(Products, { foreignKey: 'ProductID' });

  // Orders to Deliveries (One-to-One)
  Orders.hasOne(Deliveries, { foreignKey: 'OrderID' });
  Deliveries.belongsTo(Orders, { foreignKey: 'OrderID' });

  // Users to Permissions (One-to-Many)
  Users.hasMany(Permissions, { foreignKey: 'UserID' });
  Permissions.belongsTo(Users, { foreignKey: 'UserID' });
 } catch (error) {
  console.log(`${error.name}: ${error.message}`);
  process.exit(1);
 }

 try {
  // Test the connection to the database
  const connection = await Database.connection();

  // Create the database if it does not exist
  await connection.query(`CREATE DATABASE ${Database.credentials.database};`);

  // Close the connection to the database
  await connection.close();

  console.log(`Successfully created the database.`);
 } catch (error) {
  // If the database already exists, ignore the error
  if (error.name == 'SequelizeDatabaseError') {
   console.log(`Already existing database.`);
  }
  // Otherwise, log the error
  else {
   console.log(`${error.name}: ${error.message}`);
   return;
  }
 }

 try {
  // Synchronize the models with the database
  await Database.synchronize({ force: true });
  console.log(JSON.stringify(Database.credentials, null, 4));
  console.log('Successfully synchronized models.');
 } catch (error) {
  // If the synchronization fails, log the error
  console.log(`${error.name}: ${error.message}`);
  return;
 }
})();
