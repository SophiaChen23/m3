const mongoose = require('mongoose');
// 1.refexp
const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
// at least 2 or more lowercase letters
//$/: This denotes the end of the regular expression and ensures that the pattern covers the entire email address.
const validator = require('validator');
//2. const validator = require('validator');
const GroupSchema = new mongoose.Schema({
    groupname: {
        type: String,
        required: true,
        lowercase: true,
        match: /^[a-z0-9!@#$%^&?*\-_+]+$/,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        match: emailRegex,
        // validate: {
        //     validator: function (value) {
        //         return validator.isEmail(value); // Use validator.js to validate email
        //     },
        //     message: 'Invalid email address',
        // },
    },
    mobile: {
        type: Number,
    },
    profile: {
        type: String,
    },
    avatarimage: {
        type: String,
    },
});


const Group = mongoose.model('Group', GroupSchema);

module.exports = Group;
