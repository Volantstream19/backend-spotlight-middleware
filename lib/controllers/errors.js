const { Router } = require('express');

module.exports = Router()
  .get('/payment', (req, res) => {
    res.status(402).send('hello world');
  })
  .get('/teapot', (req, res) => {
    res.status(418).send('hello world');
  });
