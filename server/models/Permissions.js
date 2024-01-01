import { DataTypes } from 'sequelize';
import Database from '../database.js';

const fields = {
 PermissionID: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true,
 },
 UserID: {
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
   model: 'Users',
   key: 'UserID',
  },
 },
 PermissionType: DataTypes.STRING,
 Scope: DataTypes.STRING,
 DateGranted: DataTypes.DATE,
};

const Permissions = Database.session.define('Permissions', fields);

export default Permissions;
