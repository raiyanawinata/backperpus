// models.js

const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require("../../config/database");


const borrows = sequelize.define('borrows', {
  npm: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tglPinjam: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  nmBuku: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jurusan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tglPengembalian: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  tenggatWaktu:{
    type:DataTypes.DATE,
    allowNull: true,
  }
});


module.exports = {
  sequelize,
  borrows,
};

// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require("../../config/database");
// const { collections } = require('./collections'); // Import model collections

// const borrows = sequelize.define('borrows', {
//   npm: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   nama: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   tglPinjam: {
//     type: DataTypes.DATEONLY,
//     allowNull: false,
//   },
//   nmBuku: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   jurusan: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   tglPengembalian: {
//     type: DataTypes.DATEONLY,
//     allowNull: true,
//   },
//   status: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     defaultValue: 0,
//   },
//   tenggatWaktu:{
//     type: DataTypes.DATE,
//     allowNull: true,
//   },
//   idBuku: {
//     type: DataTypes.STRING(6),
//     allowNull: false,
//   },
// });

// // Mengaitkan (association) antara tabel collections dan borrows
// collections.hasMany(borrows, { foreignKey: 'idBuku', sourceKey: 'idBuku' });
// borrows.belongsTo(collections, { foreignKey: 'idBuku', targetKey: 'idBuku' });

// // Hook sebelum menambahkan data pada borrows
// borrows.beforeCreate(async (borrow) => {
//   // Mengambil data idBuku berdasarkan nmBuku yang diinputkan
//   const collection = await collections.findOne({ where: { nmBuku: borrow.nmBuku } });
//   if (collection) {
//     // Jika data idBuku ditemukan, assign nilainya pada idBuku di borrows
//     borrow.idBuku = collection.idBuku;
//   }
// });

// module.exports = {
//   sequelize,
//   borrows,
// };

