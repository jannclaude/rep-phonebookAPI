const mongoose = require('mongoose');

var schema = new mongoose.Schema(
    {
        email: "string",
        password: "string"
    }
);

var User = mongoose.model('User', schema);

const Friends = mongoose.model('Friends', {
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    phone: {
        type: [String],
        required: true
    }
});

module.exports = { Friends }