// models.js

const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require("../../config/database");

const collections = sequelize.define('collections', {
  idBuku: {
    type: DataTypes.STRING(6),
    allowNull: false,
  },
  nmBuku: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true // Menambahkan penguncian unik pada kolom nmBuku
  },
  penulis: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  thnTerbit: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tglMasuk: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  
  jumlahBuku: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  noRak: {
    type: DataTypes.STRING(4),
    allowNull: false,
    defaultValue: 0,
  }
});


module.exports = {
  sequelize,
  collections,
};
