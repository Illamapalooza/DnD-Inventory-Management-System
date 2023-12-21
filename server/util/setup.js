import Database from '../database.js';
import Users from '../models/Users.js';
import Restaurant from '../models/restaurant.js';
import MenuItems from '../models/MenuItems.js';
import Orders from '../models/Orders.js';
import OrderDetails from '../models/OrderDetails.js';
import Delivery from '../models/Delivery.js';
import Payment from '../models/Payment.js';
import RatingsReviews from '../models/RatingsReviews.js';

// Run this Script to initialize and create the database with tables in mysql

(async () => {
 try {
  // User and Orders
  Users.hasMany(Orders, { foreignKey: 'UserID' });
  Orders.belongsTo(Users, { foreignKey: 'UserID' });

  // Orders and OrderDetails
  Orders.hasMany(OrderDetails, { foreignKey: 'OrderID' });
  OrderDetails.belongsTo(Orders, { foreignKey: 'OrderID' });

  // MenuItems and OrderDetails
  MenuItems.hasMany(OrderDetails, { foreignKey: 'ItemID' });
  OrderDetails.belongsTo(MenuItems, { foreignKey: 'ItemID' });

  // Orders and Delivery
  Orders.hasOne(Delivery, { foreignKey: 'OrderID' });
  Delivery.belongsTo(Orders, { foreignKey: 'OrderID' });

  // Orders and Payment
  Orders.hasOne(Payment, { foreignKey: 'OrderID' });
  Payment.belongsTo(Orders, { foreignKey: 'OrderID' });

  // Users and RatingsReviews
  Users.hasMany(RatingsReviews, { foreignKey: 'UserID' });
  RatingsReviews.belongsTo(Users, { foreignKey: 'UserID' });

  // Orders and RatingsReviews
  Orders.hasMany(RatingsReviews, { foreignKey: 'OrderID' });
  RatingsReviews.belongsTo(Orders, { foreignKey: 'OrderID' });
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
