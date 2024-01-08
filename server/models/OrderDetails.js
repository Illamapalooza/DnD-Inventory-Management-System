import { DataTypes, QueryTypes, where } from 'sequelize';
import Database from '../database.js';
import Inventory from './Inventory.js';

const fields = {
 OrderDetailID: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true,
 },
 OrderID: {
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
   model: 'Orders',
   key: 'OrderID',
  },
 },
 ProductID: {
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
   model: 'Products',
   key: 'ProductID',
  },
 },
 Quantity: DataTypes.INTEGER,
 Price: DataTypes.DECIMAL,
};

const OrderDetails = Database.session.define('OrderDetails', fields);

OrderDetails.afterCreate(async (orderDetail) => {
 const inventoryItems = await Database.session.query(
  `SELECT Quantity FROM Inventory WHERE ProductID = ${orderDetail.ProductID}`,
  { type: QueryTypes.SELECT }
 );

 const orderStatus = await Database.session.query(
  `SELECT Status FROM Orders WHERE OrderID = ${orderDetail.OrderID}`,
  { type: QueryTypes.SELECT }
 );

 console.log('Order Status is', orderStatus[0].Status);

 console.log('Inventory Stock is', orderDetail.Quantity);

 if (inventoryItems.length > 0 && orderStatus[0].Status === 'Delivered') {
  const inventoryItemQuantity = inventoryItems[0].Quantity; // Accessing the quantity of the first (and likely only) item

  console.log('Inventory Stock is', inventoryItemQuantity);
  // Update the quantity and last order date
  const newQuantity =
   parseInt(inventoryItemQuantity) + parseInt(orderDetail.Quantity);
  await Database.session.query(
   `UPDATE Inventory SET Quantity = ${newQuantity}, LastOrderDate = NOW() WHERE ProductID = ${orderDetail.ProductID}`,
   { type: QueryTypes.UPDATE }
  );
 }
});

export default OrderDetails;
