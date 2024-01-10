import { DataTypes } from 'sequelize';
import Database from '../database.js';

const fields = {
 SupplierProductID: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true,
 },
 SupplierID: {
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
   model: 'Suppliers',
   key: 'SupplierID',
  },
 },
 ProductID: {
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
   model: 'Products',
   key: 'ProductID',
  },
 },
 LeadTime: DataTypes.INTEGER,
};

const SupplierProducts = Database.session.define('SupplierProducts', fields);

export default SupplierProducts;
