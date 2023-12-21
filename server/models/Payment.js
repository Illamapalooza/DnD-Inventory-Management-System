import { DataTypes } from 'sequelize';
import Database from '../database.js';

const fields = {
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
};

const Payment = Database.session.define('Payment', fields);

export default Payment;
