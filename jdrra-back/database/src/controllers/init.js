#!/usr/bin/node

/* returns a message in the server console, and a json-type object in the API */
const getinit = (req, res) => {
  console.log('Welcome to VagrantDestroyers super secret API, If you\'re reading this, probably you are being hacked, have fun :D');
  res.json('Welcome to VagrantDestroyers super secret API, If you\'re reading this, probably you are being hacked, have fun :D')
};

/* export functions*/
module.exports = {
  getinit
}