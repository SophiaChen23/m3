const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
    },
    content:{
        type:String,
        trim:true,
    },
    image:{
        data: Buffer,
        contentType: String,
    },


});
module.exports = mongoose.model("posts", postSchema);
