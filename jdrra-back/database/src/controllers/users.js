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
const getusers = async (req, res) => {
  const response = await pool.query('SELECT * FROM users');
  res.json(response.rows)
};

/* function to query the database for id and return a json object */
const getuserbyid = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  res.json(response.rows);
};

/* function to create a user,
  send it to the database and return a json object showing the object
  inserted in the database */
const createuser = async (req, res) => {
  const { username, name, last_name, cohort, city, email } = req.body;
  const response = await pool.query('INSERT INTO users (username, name, last_name, cohort, city, email) VALUES ($1, $2, $3, $4, $5, $6)', [username, name, last_name, cohort, city, email]);
  console.log(response);
  res.json({
    message: 'User Added successfully',
    body: {
      user: { username, name, last_name, cohort, city, email }
    }
  })
};

/* function to update a database user and return a json object  */
const updateuser = async (req, res) => {
  const id = req.params.id;
  const { username, name, last_name, cohort, city, email } = req.body;
  const response = pool.query('UPDATE users SET username = $1, name = $2, last_name = $3, cohort = $4, city = $5, email = $6 WHERE id = $7', [username, name, last_name, cohort, city, email, id]);
  console.log(response);
  res.json('User Updated Successfully');
};

/* function to delete a user in the database,
  returns a json object with the id of the user that was deleted */
const deleteuser = async (req, res) => {
  const id = req.params.id;
  await pool.query('DELETE FROM users where id = $1', [id]);
  res.json(`User ${id} deleted Successfully`);
};

/* function to delete all users stored in the database, returns json object */
const deleteallusers = async (req, res) => {
  await pool.query('DELETE FROM users');
  res.json(`all users delete`)
};

/* export functions */
module.exports = {
  getusers,
  getuserbyid,
  createuser,
  updateuser,
  deleteuser,
  deleteallusers
};
