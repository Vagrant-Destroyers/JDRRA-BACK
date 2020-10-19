#!/usr/bin/node
/* connection to the database using the node pg module.
  - create multiple simultaneous connections
  to the database using the pool methode */
const { Pool } = require('pg');

/* connection with the database */
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  database: 'databaseapp',
  password: 'root'
});

const getadmins = async (req, res) => {
  const response = await pool.query('SELECT * FROM admins');
  res.json(response.rows)
};

const getadminbyid = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query('SELECT * FROM admins WHERE id = $1', [id]);
  res.json(response.rows);
};

const createadmins = async (req, res) => {
  const { name, lastname, email } = req.body;
  const response = await pool.query('INSERT INTO admins (name, lastname, email) VALUES ($1, $2, $3)', [name, lastname, email]);
  console.log(response);
  res.json({
    message: 'admins Added successfully',
    body: {
      user: { name, lastname, email }
    }
  })
};

const updateadmin = async (req, res) => {
  const id = req.params.id;
  const { name, lastname, email } = req.body;
  const response = pool.query('UPDATE admins SET name = $1, lastname = $2, email = $3 WHERE id = $4', [name, lastname, email, id]);
  console.log(response);
  res.json('Admin Updated Successfully');
};

const deleteadmin = async (req, res) => {
  const id = req.params.id;
  await pool.query('DELETE FROM admins where id = $1', [id]);
  res.json(`Admin ${id} deleted Successfully`);
};

const deletealladmins = async (req, res) => {
  await pool.query('DELETE FROM admins');
  res.json(`all Admins delete`)
};

module.exports = {
  getadmins,
  getadminbyid,
  createadmins,
  updateadmin,
  deleteadmin,
  deletealladmins
};
