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

/* function to query the database and return a json object */
const getjobpost = async (req, res) => {
  const response = await pool.query('SELECT * FROM jobpost');
  res.json(response.rows)
};

/* function to query the database for id and return a json object */
const getjobpostbyid = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query('SELECT * FROM jobpost WHERE id = $1', [id]);
  res.json(response.rows);
};

/* function to create a jobpost,
  send it to the database and return a json object showing the object
  inserted in the database */
const createjobpost = async (req, res) => {
  const { title, location, company, date, link, senorityLevel, place, jobFunction, employmenttype, industries, description, voteup, votedown } = req.body;
  const response = await pool.query('INSERT INTO jobpost (title, location, company, date, link, senorityLevel, place, jobFunction, employmenttype, industries, description, voteup, votedown) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)', [title, location, company, date, link, senorityLevel, place, jobFunction, employmenttype, industries, description, voteup, votedown]);
  console.log(response);
  res.json({
    message: 'jobpost Added successfully',
    body: {
      user: { title, location, company, date, link, senorityLevel, place, jobFunction, employmenttype, industries, description, voteup, votedown }
    }
  })
};

/* function to update a database jobpost and return a json object  */
const updatejobpost = async (req, res) => {
  const id = req.params.id;
  const { title, location, company, date, link, senorityLevel, place, jobFunction, employmenttype, industries, description } = req.body;
  const response = pool.query('UPDATE jobpost SET title = $1, location = $2, company = $3, date = $4, link = $5, senorityLevel = $6, place = $7, jobFunction = $8, employmenttype = $9 , industries = $10, description = $11 WHERE id = $12', [title, location, company, date, link, senorityLevel, place, jobFunction, employmenttype, industries, description, id]);
  console.log(response);
  res.json('jobpost Updated Successfully');
};

/* function to delete a jobpost in the database,
  returns a json object with the id of the jobpost that was deleted */
const deletejobpost = async (req, res) => {
  const id = req.params.id;
  await pool.query('DELETE FROM jobpost where id = $1', [id]);
  res.json(`jobpost ${id} deleted Successfully`);
};

/* function to delete all jobpost stored in the database, returns json object */
const deletealljobpost = async (req, res) => {
  await pool.query('DELETE FROM jobpost');
  res.json(`all jobpost delete`)
};

/* export functions */
module.exports = {
  getjobpost,
  getjobpostbyid,
  createjobpost,
  updatejobpost,
  deletejobpost,
  deletealljobpost
};