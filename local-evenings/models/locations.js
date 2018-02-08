const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    name: String,
    hours: String,
    location: String,
    description: String,
    image: {type: Buffer, contentType: String}
});

module.exports = mongoose.model('location', locationSchema)