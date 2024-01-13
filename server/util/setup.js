import Database from '../database.js';
import { DataTypes } from 'sequelize';
import Users from '../models/Users.js';
import Orders from '../models/Orders.js';
import OrderDetails from '../models/OrderDetails.js';
import Deliveries from '../models/Deliveries.js';
import Products from '../models/Products.js';
import Suppliers from '../models/Suppliers.js';
import SupplierProducts from '../models/SupplierProducts.js';
import Inventory from '../models/Inventory.js';

// Run this Script to initialize and create the database with tables in mysql

(async () => {
 // Products to Inventory
 Products.hasMany(Inventory, { foreignKey: 'ProductID' });
 Inventory.belongsTo(Products, { foreignKey: 'ProductID' });

 // Products to Orders
 Products.belongsToMany(Orders, {
  through: OrderDetails,
  foreignKey: 'ProductID',
 });
 Orders.belongsToMany(Products, {
  through: OrderDetails,
  foreignKey: 'OrderID',
 });
 Products.hasMany(OrderDetails, { foreignKey: 'ProductID' });
 OrderDetails.belongsTo(Products, { foreignKey: 'ProductID' });
 Orders.hasMany(OrderDetails, { foreignKey: 'OrderID' });
 OrderDetails.belongsTo(Orders, { foreignKey: 'OrderID' });

 //Products to Suppliers
 Products.belongsToMany(Suppliers, {
  through: SupplierProducts,
  foreignKey: 'ProductID',
 });
 Suppliers.belongsToMany(Products, {
  through: SupplierProducts,
  foreignKey: 'SupplierID',
 });
 Products.hasMany(SupplierProducts, { foreignKey: 'ProductID' });
 SupplierProducts.belongsTo(Products, { foreignKey: 'ProductID' });
 Suppliers.hasMany(SupplierProducts, { foreignKey: 'SupplierID' });
 SupplierProducts.belongsTo(Suppliers, { foreignKey: 'SupplierID' });

 //Orders to Deliveries
 Orders.hasOne(Deliveries, { foreignKey: 'OrderID' });
 Deliveries.belongsTo(Orders, { foreignKey: 'OrderID' });

 //   Suppliers to Orders
 Suppliers.hasMany(Orders, { foreignKey: 'SupplierID' });
 Orders.belongsTo(Suppliers, { foreignKey: 'SupplierID' });

 console.log('Initializing database...');

 const dnd_inventory = Database.credentials.database;

 try {
  // Test the connection to the database
  const connection = await Database.connection(dnd_inventory);

  // Create the database if it does not exist
  await connection.query(`CREATE DATABASE ${dnd_inventory};`);

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
