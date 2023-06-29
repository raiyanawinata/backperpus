const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'perpustakaan',
  'root',
  '', {
    host: 'localhost',
    dialect: 'mysql',
  }
);

module.exports = sequelize;
