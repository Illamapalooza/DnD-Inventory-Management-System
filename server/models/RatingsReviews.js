import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database.js';

const RatingsReviews = sequelize.define(
 'RatingsReviews',
 {
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
 },
 {
  timestamps: false,
  tableName: 'RatingsReviews',
 }
);

export default RatingsReviews;
