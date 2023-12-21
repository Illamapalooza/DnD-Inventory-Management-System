import { DataTypes } from 'sequelize';
import Database from '../database.js';

const fields = {
 DeliveryID: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true,
 },
 OrderID: {
  type: DataTypes.INTEGER,
  allowNull: false,
 },
 DeliveryAddress: {
  type: DataTypes.TEXT,
  allowNull: false,
 },
 DeliveryTime: {
  type: DataTypes.DATE,
  allowNull: false,
 },
 DeliveryStatus: {
  type: DataTypes.STRING,
  allowNull: false,
 },
};

const Delivery = Database.session.define('Delivery', fields);

export default Delivery;
