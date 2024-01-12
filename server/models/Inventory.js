import { DataTypes } from 'sequelize';
import Database from '../database.js';

const fields = {
 InventoryID: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true,
 },
 ProductID: {
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
   model: 'Products',
   key: 'ProductID',
  },
 },
 Quantity: DataTypes.INTEGER,
 ReorderLevel: DataTypes.INTEGER,
 LastOrderDate: DataTypes.DATEONLY,
};

const Inventory = Database.session.define('Inventory', fields);

export default Inventory;
