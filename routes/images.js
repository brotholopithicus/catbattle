const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/:cat', (req, res, next) => {
  res.sendFile(path.resolve('./uploads/' + req.params.cat));
});

module.exports = router;
