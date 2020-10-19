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
  const response =  await pool.query('SELECT title, location, company, date, link, senorityLevel, place, jobFunction, employmenttype, industries, description, voteup FROM jobpost WHERE voteup > 10 ORDER BY voteup DESC;');
  res.json(response.rows);
};

const downvotes = async (req, res) => {
  const response =  await pool.query('SELECT title, location, company, date, link, senorityLevel, place, jobFunction, employmenttype, industries, description, votedown FROM jobpost WHERE votedown > 10 ORDER BY votedown DESC;');
  res.json(response.rows);
};

module.exports = {
  createvoteup,
  createvotedown,
  mostvotes,
  downvotes
}