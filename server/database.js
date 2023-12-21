import { Sequelize, DataTypes } from 'sequelize';
import mysql from 'mysql2/promise';

const credentials = {
 username: 'root',
 password: 'root',
 database: 'foodservicedb',
};

const config = {
 host: 'localhost',
 pool: {
  max: 5,
  min: 0,
  idle: 10000,
 },
};

const connection = new Sequelize({
 username: credentials.username,
 password: credentials.password,
 database: credentials.database,
 dialect: 'mysql',
 config,
});

try {
 await sequelize.authenticate();
 console.log('Connection has been established successfully.');
} catch (error) {
 console.error('Unable to connect to the database:', error);
}

// // Syncing models with the database
// sequelize.sync({ force: false }).then(() => {
//  console.log('Database & tables created with associations!');
// });

export default connection;
