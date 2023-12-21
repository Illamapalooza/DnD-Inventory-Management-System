import { DataTypes } from 'sequelize';
import Database from '../database.js';

const fields = {
 ReviewID: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true,
 },
 UserID: {
  type: DataTypes.INTEGER,
  allowNull: false,
 },
 OrderID: {
  type: DataTypes.INTEGER,
  allowNull: false,
 },
 Rating: {
  type: DataTypes.INTEGER,
  allowNull: false,
 },
 Comment: DataTypes.TEXT,
 Date: {
  type: DataTypes.DATE,
  defaultValue: DataTypes.NOW,
 },
};

const RatingsReviews = Database.session.define('RatingsReviews', fields);

export default RatingsReviews;
