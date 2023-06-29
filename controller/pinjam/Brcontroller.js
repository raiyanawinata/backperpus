// controller.js

const { borrows } = require('../../model/pinjam/Brmodels.js');

exports.getAllPeminjaman = async (req, res) => {
  try {
    const peminjaman = await borrows.findAll();
    res.json(peminjaman);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.createPeminjaman = async (req, res) => {
  const { npm, nama, tglPinjam, nmBuku, jurusan,tenggatWaktu,tglPengembalian } = req.body;
  try {
    const newBorrows = await borrows.create({
      npm,
      nama,
      tglPinjam,
      nmBuku,
      jurusan,
      tenggatWaktu,
      tglPengembalian
    });
    res.json(newBorrows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deletePeminjaman = async (req, res) => {
  const { id } = req.params;
  try {
    await borrows.destroy({ where: { id } });
    res.json({ message: 'Peminjaman deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// 

//   const { id } = req.params;
//   const { tglPengembalian } = req.body;
//   try {
//     const peminjaman = await bor.findByPk(id);
//     if (peminjaman) {
//       peminjaman.tglPengembalian = tglPengembalian;
//       peminjaman.status = tglPengembalian ? 1 : 0;
//       await peminjaman.save();
//       res.json(peminjaman);
//     } else {
//       res.status(404).json({ message: 'Peminjaman not found' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };
exports.updatePeminjaman = async (req, res) => {
  const { id } = req.params;
  const { tglPengembalian } = req.body;
  try {
    const peminjaman = await borrows.findByPk(id);
    if (peminjaman) {
      peminjaman.tglPengembalian = tglPengembalian;
      peminjaman.status = tglPengembalian ? 1 : 0;
      try {
        await peminjaman.save();
        res.json(peminjaman);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error saving peminjaman' });
      }
    } else {
      res.status(404).json({ message: 'Peminjaman not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getTotalData = async(req,res)=>{
  try {
    //menghitung total data pada tabel collection
    const totalData = await borrows.count();

    console.log(totalData);
  } catch (error) {
    console.error(error);
  }
}

