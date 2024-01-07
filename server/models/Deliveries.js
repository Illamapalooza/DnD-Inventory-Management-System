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
 DeliveryDate: DataTypes.DATEONLY,
 ReceivedBy: DataTypes.STRING,
 DeliveryCondition: DataTypes.ENUM('Good', 'Damaged', 'Lost', 'Satisfactory'),
};

const Deliveries = Database.session.define('Deliveries', fields);

export default Deliveries;
