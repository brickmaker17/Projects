const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const databaseSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    upvote: {
        default: 0,
        type: Number
    },

    downvote: {
        default: 0,
        type: Number, 
    },

    totalvotes: {
        default: 0,
        type: Number
    }

});

module.exports = mongoose.model('Issues', databaseSchema);