#!/usr/bin/node
/* config server */

/* import express */
const express = require('express');
const port = 9000

/* eject express */
const app = express();

/* middlewares */
app.use(express.json());

/* routes */
app.use(require('../src/routes/index'));

/* listen server on port */
app.listen(port);
console.log(`server rum on port: ${port}`)
