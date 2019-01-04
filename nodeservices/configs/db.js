const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
  sync: false,

  dialectOptions: {
      encrypt: true
  },
  options: {
      encrypt: true
 },
  additional: {
    timestamps: false
  },

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Add all the RDBMS table schema here 
db.purchaseOrders = require('../server/models/purchaseOrder.js')(sequelize, Sequelize);

module.exports = db;