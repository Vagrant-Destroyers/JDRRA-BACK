#!/usr/bin/node
/* connection to the database using the node pg module.
  - create multiple simultaneous connections
  to the database using the pool methode */
const { Pool } = require('pg');
/* use module nodejs fs to read files */
const fs = require('fs');

/* connection with the database */
const pool = new Pool({
  host: '35.231.149.59',
  user: 'postgres',
  database: 'databaseapp',
  password: 'c6aMCF5prn04vb0H'
});


const storeFileIntoDB = async (res, req) => {
  try {
    const rawdata = fs.readFileSync('/var/www/vagrantdestroyers.fun/html/JDRRA-BACK/jdrra-back/Scrapers/LinkedInScraper/data.json');
    const jobs = JSON.parse(rawdata);

    for (const job of jobs) {
      const { title, location, company, date, link, senorityLevel, place, jobFunction, employmenttype, industries, description, jobBackTechs, techTypeBack, jobFrontTechs, techTypeFront, jobDevopsTechs, techTypeDevops} = job;
      const response = await pool.query('INSERT INTO jobpost (title, location, company, date, link, senorityLevel, place, jobFunction, employmenttype, industries, description, jobBackTechs, techTypeBack, jobFrontTechs, techTypeFront, jobDevopsTechs, techTypeDevops, voteup, votedown) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)', [title, location, company, date, link, senorityLevel, place, jobFunction, employmenttype, industries, description, jobBackTechs, techTypeBack, jobFrontTechs, techTypeFront, jobDevopsTechs, techTypeDevops, 0, 0]);
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  storeFileIntoDB
};
