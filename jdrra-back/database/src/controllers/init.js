#!/usr/bin/node

const getinit = (req, res) => {
  console.log('welcome to vagrant destroy');
  res.json('welcome to vagrant destroy')
};

module.exports = {
  getinit
}