#!/usr/bin/node
/* connection to the database using the node pg module.
  - create multiple simultaneous connections
  to the database using the pool methode */
const { Pool } = require('pg');

/* connection with the database */
const pool = new Pool({
  host: '35.231.149.59',
  user: 'postgres',
  database: 'databaseapp',
  password: 'c6aMCF5prn04vb0H'
});

const getwebpages = async (req, res) => {
  const response = await pool.query('SELECT * FROM webpages');
  res.json(response.rows)
};

const getwebpagebyid = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query('SELECT * FROM webpages WHERE id = $1', [id]);
  res.json(response.rows);
};

const createwebpages = async (req, res) => {
  const { name, webpage, link } = req.body;
  const response = await pool.query('INSERT INTO webpages (name, webpage, link) VALUES ($1, $2, $3)', [name, webpage, link]);
  console.log(response);
  res.json({
    message: 'webpages Added successfully',
    body: {
      user: { name, webpage, link }
    }
  })
};

const updatewebpage = async (req, res) => {
  const id = req.params.id;
  const { name, webpage, link } = req.body;
  const response = pool.query('UPDATE webpages SET name = $1, webpage = $2, link = $3 WHERE id = $4', [name, webpage, link, id]);
  console.log(response);
  res.json('webpage Updated Successfully');
};

const deletewebpage = async (req, res) => {
  const id = req.params.id;
  await pool.query('DELETE FROM webpages where id = $1', [id]);
  res.json(`webpage ${id} deleted Successfully`);
};

const deleteallwebpages = async (req, res) => {
  await pool.query('DELETE FROM webpages');
  res.json(`all webpages delete`)
};

module.exports = {
  getwebpages,
  getwebpagebyid,
  createwebpages,
  updatewebpage,
  deletewebpage,
  deleteallwebpages
};
