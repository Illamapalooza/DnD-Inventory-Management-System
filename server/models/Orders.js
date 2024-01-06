import { DataTypes } from 'sequelize';
import Database from '../database.js';

const fields = {
 OrderID: {
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
 PONumber: DataTypes.STRING,
 OrderDate: DataTypes.DATE,
 ExpectedDeliveryDate: DataTypes.DATE,
 Status: DataTypes.ENUM('Pending', 'Delivered', 'Cancelled'),
 PaymentStatus: DataTypes.ENUM(
  'Pending',
  'Paid',
  'Cancelled',
  'Refunded',
  'Overdue'
 ),
 InvoiceNumber: DataTypes.STRING,
};

const Orders = Database.session.define('Orders', fields);

export default Orders;
