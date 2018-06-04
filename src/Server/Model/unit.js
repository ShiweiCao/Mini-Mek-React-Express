const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unitSchema = new Schema({
    name: String,
    affiliation: String,
    color: String,
});

module.exports = mongoose.model('Unit', unitSchema);