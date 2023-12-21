import { DataTypes } from 'sequelize';
import Database from '../database.js';

const field = {
 RestaurantID: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true,
 },
 Name: {
  type: DataTypes.STRING,
  allowNull: false,
 },
 Location: {
  type: DataTypes.TEXT,
  allowNull: false,
 },
 Contact: {
  type: DataTypes.STRING,
  allowNull: false,
 },
};

const Restaurant = Database.session.define('Restaurant', field);

export default Restaurant;
