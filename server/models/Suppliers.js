import { DataTypes } from 'sequelize';
import Database from '../database.js';

const fields = {
 SupplierID: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true,
 },
 Name: {
  type: DataTypes.STRING,
  allowNull: false,
 },
 Phone: DataTypes.STRING,
 Address: DataTypes.TEXT,
 Rating: DataTypes.DECIMAL(10, 1),
};

const Suppliers = Database.session.define('Suppliers', fields);

export default Suppliers;
