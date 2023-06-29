const express = require('express');
const cors = require('cors');

const { sequelize: Clsequelize, Collection } = require("./model/koleksi/Clmodels");
const ClController = require("./controller/koleksi/Clcontroller");

const { sequelize: Brsequelize, Borrow } = require("./model/pinjam/Brmodels");
const Brcontroller = require("./controller/pinjam/Brcontroller");

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.get('/peminjaman', Brcontroller.getAllPeminjaman);
app.get('/peminjaman/count',Brcontroller.getTotalData);
app.post('/peminjaman', Brcontroller.createPeminjaman);
app.delete('/peminjaman/:id', Brcontroller.deletePeminjaman);
app.put('/peminjaman/:id', Brcontroller.updatePeminjaman);

app.get('/collection', ClController.getAllCollections);
app.get('/collection/count',ClController.getTotalData);
app.post("/create/collection", ClController.createCollection);
app.put('/collection/put/:id', ClController.updateCollection);

// Sinkronisasi model dengan database
Promise.all([Clsequelize.sync(), Brsequelize.sync()])
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Gagal sinkronisasi model dengan database:', error);
  });
