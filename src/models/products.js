const client = require('../helpers/db');
client.connect();

exports.getProducts = (cb) => {
  client.query(`SELECT * FROM product`, (err, res) => {
    console.log('ini error dari modal', err);
    cb(res.rows);
  });
};

exports.getProductByID = (data, cb) => {
  client.query(`SELECT * FROM product WHERE id=$1`, [data.id], (err, res) => {
    console.log('ini error dari modal', err);
    cb(res.rows);
  });
};

exports.createProduct = (data, cb) => {
  const query = 'INSERT INTO product(nama_barang, stok, jumlah_terjual, jenis_barang) VALUES($1, $2, $3, $4) RETURNING *';
  const values = [data.nama_barang, data.stok, data.jumlah_terjual, data.jenis_barang];
  client.query(query, values, (err, res) => {
    console.log('ini error dari modal', err);
    cb(res.rows);
  });
};

exports.editProduct = (data, id, cb) => {
  const query = 'UPDATE product SET nama_barang=$1, stok=$2, jumlah_terjual=$3, jenis_barang=$4 WHERE id=$5 RETURNING *';
  const values = [data.nama_barang, parseInt(data.stok), parseInt(data.jumlah_terjual), data.jenis_barang, id];
  client.query(query, values, (err, res) => {
    console.log('ini error dari modal', err);
    cb(res.rows);
  });
};

exports.deleteProduct = (id, cb) => {
  const query = 'DELETE FROM product WHERE id=$1';
  const values = [id];
  client.query(query, values, (err, res) => {
    console.log('ini error dari modal', err);
    cb(res.rows);
  });
};
