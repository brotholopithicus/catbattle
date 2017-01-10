const express = require('express');
const router = express.Router();
const multer = require('multer');

const User = require('../models/User');
const Cat = require('../models/Cat');

const restricted = require('../middleware/restricted');
const activeSession = require('../middleware/activeSession');

let storage = multer.memoryStorage();
let upload = multer({
    storage
});

/* GET home page. */
router.get('/', function(req, res, next) {
    let data = { title: 'Cat Tinder' };
    console.log(req.session);
    res.render('index', data);
});

/* GET post new cat page. */
router.get('/post', (req, res, next) => {
    res.render('post');
});

/* GET rate cats page */
router.get('/rate', restricted, (req, res, next) => {
    res.render('rate');
});

/* GET login page */
router.get('/login', activeSession, (req, res, next) => {
    res.render('login');
});

/* GET signup page */
router.get('/signup', activeSession, (req, res, next) => {
    res.render('register');
});

/* GET logout page */
router.get('/logout', (req, res, next) => {
    if (req.session) {
        req.session.destroy(err => {
            if (err) return next(err);
            return res.redirect('/');
        });
    }
});

/* GET profile page */
router.get('/profile', (req, res, next) => {
    res.render('profile');
});

/* POST new cat document */
router.post('/upload', upload.single('photo'), (req, res, next) => {
    let cat = new Cat({
        owner: 'James',
        binary: req.file.buffer
    });
    cat.save(err => {
        if (err) return next(err);
        res.redirect('/');
    });
});

router.get('/test', (req, res, next) => {
    Cat.findOne({ owner: 'James' }, (err, cat) => {
        if (!err && cat) res.send(new Buffer(cat.binary));
    });
});

module.exports = router;
