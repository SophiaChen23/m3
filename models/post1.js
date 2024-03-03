const mongoose = require('mongoose');
const newPost =   new mongoose.Schema({
    title: req.body.title,
    content: req.body.content,
    image: {
        data: req.file.buffer,
        contentType: req.file.mimetype
    }
});
module.exports = mongoose.model("posts1", newPost);
