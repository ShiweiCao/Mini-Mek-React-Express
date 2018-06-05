const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MechSchema = new Schema({
	id : Number,
    name : String,
    model : String,
    weight : Number,
    class : String,
});

module.exports = mongoose.model('Mech', MechSchema);