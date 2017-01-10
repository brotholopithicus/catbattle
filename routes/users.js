const express = require('express');
const router = express.Router();

const User = require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', (req, res, next) => {
  console.log(req.body);
  next();
});

router.post('/new', (req, res, next) => {
  console.log(req.body);
  next();
});

module.exports = router;
