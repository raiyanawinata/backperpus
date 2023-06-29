const { collections } = require('../../model/koleksi/Clmodels.js');

// Mendapatkan semua data koleksi
exports.getAllCollections = async (req, res) => {
  try {
    const allCollections = await collections.findAll();
    res.json(allCollections);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mendapatkan data koleksi' });
  }
};

// Menambahkan data koleksi baru
exports.createCollection = async (req, res) => {
  const { idBuku, nmBuku, penulis, thnTerbit, jumlahBuku, noRak } = req.body;
  try {
    const newCollection = await collections.create({
      idBuku,
      nmBuku,
      penulis,
      thnTerbit,
      tglMasuk: new Date(), // Tanggal masuk akan diisi dengan tanggal saat ini
      jumlahBuku,
      noRak,
    });
    res.json(newCollection);
  } catch (error) {
    res.status(500).json({ error: 'Gagal menambahkan data koleksi baru' });
  }
};

// Mengedit data koleksi berdasarkan ID
exports.updateCollection = async (req, res) => {
    const collectionId = req.params.id;
    const { nmBuku, penulis, thnTerbit, jumlahBuku, noRak } = req.body;
    try {
      const updatedCollection = await collections.update(
        {
          nmBuku,
          penulis,
          thnTerbit,
          jumlahBuku,
          noRak,
        },
        {
          where: { id: collectionId },
        }
      );
      if (updatedCollection[0] === 1) {
        res.json({ message: 'Data koleksi berhasil diupdate' });
      } else {
        res.status(404).json({ error: 'Data koleksi tidak ditemukan' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Gagal mengedit data koleksi' });
    }
  };
  
//   module.exports = {
//     getAllCollections,
//     addCollection,
//     editCollection,
//   };
exports.getTotalData = async(req,res)=>{
    try {
      //menghitung total data pada tabel collection
      const totalData = await collections.count();

      console.log(totalData);
    } catch (error) {
      console.error(error);
    }
  }
