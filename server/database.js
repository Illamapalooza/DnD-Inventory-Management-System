import { Sequelize } from 'sequelize';

/**
 * The user credentials to connect the database
 */
const credentials = {
 database: 'dnd_inventory',
 username: 'root',
 password: 'root',
};

/**
 * The connection options of the model to the database
 */
const options = {
 host: 'localhost',
 dialect: 'mysql',
 define: {
  // disable auto-generated timestamp columns
  timestamps: false,
  // make table names same as model
  freezeTableName: true,
 },
 // Create a pool of connections for improved performance
 pool: {
  max: 10, // Maximum number of connections in pool
  min: 0, // Minimum number of connections in pool
  acquire: 30000, // The maximum time, in milliseconds, that pool will try to get connection before throwing error
  idle: 10000, // The maximum time, in milliseconds, that a connection can be idle before being released
 },
};

/**
 * The session object to the database
 * @type {Sequelize}
 */
const session = new Sequelize(
 credentials.database,
 credentials.username,
 credentials.password,
 options
);

/**
 * Synchronize the model with the database
 * @param {Object} options
 */
const synchronize = async function (options) {
 await session.sync(options);
 await session.close();
};

/**
 * Check the database connection
 * returns {boolean} connection status of the database
 */
const connection = async (dnd_inventory) => {
 const connection = new Sequelize(
  dnd_inventory,
  credentials.username,
  credentials.password,
  options
 );
 await connection
  .authenticate()
  .then(() => {
   console.log('Connection has been established successfully.');
  })
  .catch((err) => {
   console.error('Unable to connect to the database:', err);
  });

 return connection;
};

const Database = { session, options, credentials, synchronize, connection };

export default Database;
