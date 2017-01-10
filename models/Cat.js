const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catSchema = Schema({
    owner: { type: String },
    binary: { type: Buffer, required: true },
    date: { type: Date, default: Date.now() },
    meta: {
        votes: { type: Number, default: 0 },
        favs: { type: Number, default: 0 }
    }
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
