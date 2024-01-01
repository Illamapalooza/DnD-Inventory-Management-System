import { DataTypes } from 'sequelize';
import Database from '../database.js';

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

export default OrderDetails;
