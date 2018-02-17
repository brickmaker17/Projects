const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({

    poster:{
        type: String,
        required: true
    },

    comment: {
        type:String,
        required: true
    },
    issue: {
        type: mongoose.Schema.Types.ObjectId, ref:"Issue"
    }
})
module.exports=mongoose.model("Comment", commentSchema)