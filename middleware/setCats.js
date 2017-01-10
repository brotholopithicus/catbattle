function setCats(catList, callback) {
    function getRandCat(catList) {
        return catList[Math.floor(Math.random() * catList.length)];
    }
    let catOne = getRandCat(catList);
    let catTwo = getRandCat(catList);
    while (catOne === catTwo) {
        catTwo = getRandCat(catList);
    }

    return callback(null, { catOne, catTwo });
}

module.exports = setCats;
