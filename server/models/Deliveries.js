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
  references: {
   model: 'Orders',
   key: 'OrderID',
  },
 },
 DeliveryDate: DataTypes.DATE,
 ReceivedBy: DataTypes.STRING,
 DeliveryCondition: DataTypes.STRING,
};

const Deliveries = Database.session.define('Deliveries', fields);

export default Deliveries;
