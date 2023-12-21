import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database.js';

const Orders = sequelize.define(
 'Orders',
 {
  OrderID: {
   type: DataTypes.INTEGER,
   primaryKey: true,
   autoIncrement: true,
  },
  UserID: {
   type: DataTypes.INTEGER,
   allowNull: false,
  },
  OrderDate: {
   type: DataTypes.DATE,
   defaultValue: DataTypes.NOW,
  },
  TotalAmount: {
   type: DataTypes.DECIMAL(10, 2),
   allowNull: false,
  },
  Status: DataTypes.STRING,
 },
 {
  timestamps: false,
  tableName: 'Orders',
 }
);

export default Orders;
