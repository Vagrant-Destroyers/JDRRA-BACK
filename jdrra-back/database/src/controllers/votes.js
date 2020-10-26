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

const createvoteup = async (req, res) => {
  const id = req.params.id;
  const { voteup } = req.body;
  const response = await pool.query('UPDATE jobpost SET voteup = voteup + $1 WHERE id=$2;', [voteup, id]);
  console.log('vote Added successfully')
  res.json(response.rows);
};

const createvotedown = async (req, res) => {
  const id = req.params.id;
  const { votedown } = req.body;
  const response = await pool.query('UPDATE jobpost SET votedown = votedown + $1 WHERE id=$2;', [votedown, id]);
  console.log('vote Added successfully')
  res.json(response.rows);
};

const mostvotes = async (req, res) => {
  const response =  await pool.query('SELECT * FROM jobpost WHERE voteup > 10 ORDER BY voteup DESC LIMIT 10;');
  res.json(response.rows);
};

const downvotes = async (req, res) => {
  const response =  await pool.query('SELECT * FROM jobpost WHERE votedown > 10 ORDER BY votedown DESC LIMIT 10;');
  res.json(response.rows);
};

module.exports = {
  createvoteup,
  createvotedown,
  mostvotes,
  downvotes
}