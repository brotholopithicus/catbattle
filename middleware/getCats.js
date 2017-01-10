function catList() {
    return require('fs').readdirSync('uploads');
}

module.exports = catList;
