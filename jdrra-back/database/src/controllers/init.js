#!/usr/bin/node

const getinit = (req, res) => {
  console.log('Welcome to VagrantDestroyers super secret API\nIf you\'re reading this, probably you are being hacked, have fun XD');
  res.json('Welcome to VagrantDestroyers super secret API\nIf you\'re reading this, probably you are being hacked, have fun XD')
};

module.exports = {
  getinit
}