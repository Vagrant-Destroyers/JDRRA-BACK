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

const getsearchBack = async (req, res) => {
  const response = await pool.query('SELECT * FROM jobpost WHERE description LIKE \'%Backend%\'');
  res.json(response.rows)
};

const getsearchFront = async (req, res) => {
  const response = await pool.query('SELECT * FROM jobpost WHERE description LIKE \'%Frontend%\'');
  res.json(response.rows)
};

const getsearchbytext = async (req, res) => {
  const response = await pool.query('SELECT jobpost from to_tsvector(\'frontend backend\') \@@ to_tsquery(\'Frontend | Front | front | Backend | Back | back\')');
  res.json(response.rows);
};

module.exports = {
  getsearchBack,
  getsearchFront,
  getsearchbytext
};
