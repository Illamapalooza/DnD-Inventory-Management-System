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
 Category: DataTypes.ENUM(
  'Beverages',
  'Bread/Bakery',
  'Canned/Jarred Goods',
  'Dairy',
  'Frozen Goods',
  'Meat',
  'Fruits',
  'Vegetables',
  'Condiments',
  'Snacks',
  'Grains'
 ),
 UnitPrice: DataTypes.DECIMAL(10, 2),
 Photo: DataTypes.BLOB,
 SKU: DataTypes.STRING,
 Brand: DataTypes.STRING,
};

const Products = Database.session.define('Products', fields);

export default Products;
