import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database.js';

const User = sequelize.define(
 'User',
 {
  UserID: {
   type: DataTypes.INTEGER,
   primaryKey: true,
   autoIncrement: true,
  },
  Name: {
   type: DataTypes.STRING,
   allowNull: false,
  },
  Email: {
   type: DataTypes.STRING,
   allowNull: false,
   unique: true,
  },
  Phone: DataTypes.STRING,
  Address: {
   type: DataTypes.TEXT,
   allowNull: false,
  },
 },
 {
  timestamps: false,
  tableName: 'Users',
 }
);

export default User;
