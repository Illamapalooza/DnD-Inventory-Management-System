import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database.js';

const Payment = sequelize.define(
 'Payment',
 {
  PaymentID: {
   type: DataTypes.INTEGER,
   primaryKey: true,
   autoIncrement: true,
  },
  OrderID: {
   type: DataTypes.INTEGER,
   allowNull: false,
  },
  Amount: {
   type: DataTypes.DECIMAL(10, 2),
   allowNull: false,
  },
  PaymentMethod: {
   type: DataTypes.STRING,
   allowNull: false,
  },
  PaymentStatus: {
   type: DataTypes.STRING,
   allowNull: false,
  },
 },
 {
  timestamps: false,
  tableName: 'Payment',
 }
);

export default Payment;
