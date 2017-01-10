const fs = require('fs');
const path = require('path');
const selected = { cat: 'e55fff2e057eb4082cf2c582011fc9b7' };
fs.readFile(path.resolve('./data/cats.json'), (err, file) => {
    if (err) return next(err);
    file = JSON.parse(file);
    file.cats.forEach(cat => {
        for (let key in cat) {
            if (cat[key] === selected.cat) {
                cat.votes++;
                break;
            }
        }
    });
    fs.writeFile(path.resolve('./data/cats.json'), JSON.stringify(file), (err) => {
        if (err) return next(err);
        console.log('saved!');
    });
});
