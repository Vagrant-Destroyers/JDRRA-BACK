#!/usr/bin/node
/* config server */

/* import express */
const express = require('express');

/* eject express */
const app = express();

/* middlewares */
app.use(express.json());

/* routes */
app.use(require('../src/routes/index'));

/* listen server on port 9000 */
app.listen(9000);
console.log('server rum on port 9000')
