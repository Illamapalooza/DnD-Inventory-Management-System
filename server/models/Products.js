import { DataTypes } from 'sequelize';
import Database from '../database.js';

const fields = {
 ProductID: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true,
 },
 Name: {
  type: DataTypes.STRING,
  allowNull: false,
 },
 Description: DataTypes.TEXT,
 Category: DataTypes.STRING,
 UnitPrice: DataTypes.DECIMAL,
 Photo: DataTypes.BLOB,
 SKU: DataTypes.STRING,
 Brand: DataTypes.STRING,
};

const Products = Database.session.define('Products', fields);

export default Products;
