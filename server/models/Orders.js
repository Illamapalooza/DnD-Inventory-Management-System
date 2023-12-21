import { DataTypes } from 'sequelize';
import Database from '../database.js';

const fields = {
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
};

const Orders = Database.session.define('Orders', fields);

export default Orders;
