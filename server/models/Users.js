import { DataTypes } from 'sequelize';
import Database from '../database.js';

const fields = {
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
};

const Users = Database.session.define('Users', fields);

export default Users;
