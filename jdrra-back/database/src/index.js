#!/usr/bin/node
/* config server */

/* import express */
const express = require('express');
var cors = require('cors');
const port = 9000

/* eject express */
const app = express();

/* middlewares */
app.use(cors());
app.use(express.json());

/* routes */
app.use(require('../src/routes/index'));

/* listen server on port */
app.listen(port, function () {
    console.log(`CORS-enabled web server listening on port: ${port}`)
});
