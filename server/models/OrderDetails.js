import { DataTypes } from 'sequelize';
import Database from '../database.js';

const fields = {
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
};

const OrderDetails = Database.session.define('OrderDetails', fields);

export default OrderDetails;
