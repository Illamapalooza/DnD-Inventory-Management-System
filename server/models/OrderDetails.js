import { Sequelize, DataTypes } from 'sequelize';
import sequelize from './db.js';

const OrderDetails = sequelize.define(
 'OrderDetails',
 {
  OrderDetailsID: {
   type: DataTypes.INTEGER,
   primaryKey: true,
   autoIncrement: true,
  },
  OrderID: {
   type: DataTypes.INTEGER,
   allowNull: false,
  },
  ItemID: {
   type: DataTypes.INTEGER,
   allowNull: false,
  },
  Quantity: {
   type: DataTypes.INTEGER,
   allowNull: false,
  },
  Price: {
   type: DataTypes.DECIMAL(10, 2),
   allowNull: false,
  },
 },
 {
  timestamps: false,
  tableName: 'OrderDetails',
 }
);

export default OrderDetails;
