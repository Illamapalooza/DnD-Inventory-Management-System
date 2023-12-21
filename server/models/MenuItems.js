import { DataTypes } from 'sequelize';
import Database from '../database.js';

const fields = {
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
};

const MenuItems = Database.session.define('MenuItems', fields);

export default MenuItems;
