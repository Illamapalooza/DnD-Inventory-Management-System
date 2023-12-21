import { Sequelize, DataTypes } from 'sequelize';
import { DataTypes } from 'sequelize';

const Restaurant = sequelize.define(
 'Restaurant',
 {
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
 },
 {
  timestamps: false,
  tableName: 'Restaurant',
 }
);

export default Restaurant;
