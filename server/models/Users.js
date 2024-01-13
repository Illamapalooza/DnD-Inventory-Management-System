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
 Password: {
  type: DataTypes.STRING,
  allowNull: false,
 },
 Role: {
  type: DataTypes.ENUM('Admin', 'Staff', 'Manager'),
  allowNull: false,
 },
 DateCreated: {
  type: DataTypes.DATE,
  defaultValue: DataTypes.NOW,
 },
 ProfilePhoto: {
  type: DataTypes.STRING, // Storing the URL as a string
  allowNull: true, // This can be optional
 },
};

const Users = Database.session.define('Users', fields);

export default Users;
