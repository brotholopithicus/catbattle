const fs = require('fs');
let cats = require('../middleware/getCats')();
let data = {
    cats: []
};

for (let i = 0; i < cats.length; i++) {
    data.cats.push({ id: i, cat: cats[i], votes: 0 });
}

data = JSON.stringify(data);
fs.writeFile('./data/cats.json', data, (err) => {
    if (err) return err;
    console.log('done');
});
