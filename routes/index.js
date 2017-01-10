const express = require('express');
const router = express.Router();
const multer = require('multer');
const getCats = require('../middleware/getCats');
const setCats = require('../middleware/setCats');

const User = require('../models/User');
const Cat = require('../models/Cat');

const path = require('path');
const fs = require('fs');
const catPath = path.resolve('./data/cats.json');

let storage = multer.memoryStorage();
let upload = multer({
    storage
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Cat Tinder' });
});

/* GET post new cat page. */
router.get('/post', (req, res, next) => {
    res.render('post');
});

/* GET rate cats page */
router.get('/rate', (req, res, next) => {
    let catList = getCats();
    setCats(catList, (err, cats) => {
        if (err) return next(err);
        res.render('rate', { cats });
    });
});

/* GET login / signup page */
router.get('/login', (req, res, next) => {
    res.render('login');
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

router.post('/vote', (req, res, next) => {
    let selected = req.body.selected;
    let catList = fs.readFileSync(catPath);
    catList = JSON.parse(catList);
    console.log(catList);
    catList.forEach(cat => {
        if (cat.cat === selected) {
            console.log('match!');
            console.log(cat.votes);
            cat.votes++;
            console.log(cat.votes);
        }
    });
    catList = JSON.stringify(catList);
    fs.writeFile(catPath, catList, (err) => {
        if (err) return next(err);
        console.log('saved');
        res.redirect('/rate');
    });
});

module.exports = router;
