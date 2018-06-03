const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	id : Number,
    name : String,
    rank : String,
    gunnery : Number,
    piloting : Number,
    age : Number,
    MechType : String,
});

module.exports = mongoose.model('Pilot', UserSchema);
