const express = require('express');
const router = express.Router();

const User = require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/login', (req, res, next) => {
    User.findOne({ username: req.body.username }, (err, user) => {
        if (err) return next(err);
        user.checkPassword(req.body.password, (err, result) => {
            if (err) return next(err);
            req.session.user = user;
            console.log(req.session);
            res.redirect('/');
        });
    });
});

router.post('/signup', (req, res, next) => {
    let user = new User({
        username: req.body.username,
        password: req.body.password
    });
    user.save(err => {
        if (err) return next(err);
        res.redirect('/');
    });
});

module.exports = router;
