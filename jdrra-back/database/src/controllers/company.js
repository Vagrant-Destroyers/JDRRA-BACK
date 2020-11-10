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
const getcompany = async (req, res) => {
  const response = await pool.query('SELECT * FROM company');
  res.json(response.rows)
};

/* function to query the database for id and return a json object */
const getcompanybyid = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query('SELECT * FROM company WHERE id = $1', [id]);
  res.json(response.rows);
};

/* function to create a company,
  send it to the database and return a json object showing the object
  inserted in the database */
const createcompany = async (req, res) => {
  const { name, city, levelpost, email } = req.body;
  const response = await pool.query('INSERT INTO company (name, city, levelpost, email) VALUES ($1, $2, $3, $4)', [name, city, levelpost, email]);
  console.log(response);
  res.json({
    message: 'company Added successfully',
    body: {
      user: { name, city, levelpost, email }
    }
  })
};

/* function to update a database company and return a json object  */
const updatecompany = async (req, res) => {
  const id = req.params.id;
  const { name, city, levelpost, email } = req.body;
  const response = pool.query('UPDATE company SET name = $1, city = $2, levelpost = $3, email = $4 WHERE id = $5', [name, city, levelpost, email, id]);
  console.log(response);
  res.json('company Updated Successfully');
};

/* function to delete a company in the database,
  returns a json object with the id of the company that was deleted */
const deletecompany = async (req, res) => {
  const id = req.params.id;
  await pool.query('DELETE FROM company where id = $1', [id]);
  res.json(`Admin ${id} deleted Successfully`);
};

/* function to delete all company stored in the database, returns json object */
const deleteallcompany = async (req, res) => {
  await pool.query('DELETE FROM company');
  res.json(`all company delete`)
};

/* export functions */
module.exports = {
  getcompany,
  getcompanybyid,
  createcompany,
  updatecompany,
  deletecompany,
  deleteallcompany
};
