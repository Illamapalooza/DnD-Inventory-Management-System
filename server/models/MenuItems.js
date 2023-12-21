import { Sequelize, DataTypes } from 'sequelize';
import sequelize from './db.js';

const MenuItems = sequelize.define(
 'MenuItems',
 {
  ItemID: {
   type: DataTypes.INTEGER,
   primaryKey: true,
   autoIncrement: true,
  },
  Name: {
   type: DataTypes.STRING,
   allowNull: false,
  },
  Description: DataTypes.TEXT,
  Price: {
   type: DataTypes.DECIMAL(10, 2),
   allowNull: false,
  },
  Category: {
   type: DataTypes.STRING,
   allowNull: false,
  },
 },
 {
  timestamps: false,
  tableName: 'MenuItems',
 }
);

export default MenuItems;
