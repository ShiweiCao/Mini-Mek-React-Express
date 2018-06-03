const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MechSchema = new Schema({
	id : Number,
    Name : String,
    Model : String,
    Weight : Number,
    Class : String,
});

module.exports = mongoose.model('Mech', MechSchema);