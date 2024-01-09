import { DataTypes } from 'sequelize';
import Database from '../database.js';
import Inventory from './Inventory.js';

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
  'Beverages/Drinks',
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
 Photo: DataTypes.STRING,
 SKU: DataTypes.STRING,
 Brand: DataTypes.STRING,
 Size: DataTypes.STRING,
};

const Products = Database.session.define('Products', fields);

Products.afterCreate(async (product) => {
 await Inventory.create({
  ProductID: product.ProductID,
  Quantity: 0,
 });
});

export default Products;
