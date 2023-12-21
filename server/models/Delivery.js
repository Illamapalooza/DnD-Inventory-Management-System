import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database.js';

const Delivery = sequelize.define(
 'Delivery',
 {
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
  DeliveryStatus: DataTypes.STRING,
 },
 {
  timestamps: false,
  tableName: 'Delivery',
 }
);

export default Delivery;
