#!/usr/bin/node

const getinit = (req, res) => {
  console.log('Welcome to VagrantDestroyers super secret API, If you\'re reading this, probably you are being hacked, have fun :D');
  res.json('Welcome to VagrantDestroyers super secret API, If you\'re reading this, probably you are being hacked, have fun :D')
};

module.exports = {
  getinit
}