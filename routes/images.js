const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('You have a butt on your face.');
});

module.exports = router;
