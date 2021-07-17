const mongoose = require('mongoose');

const User = mongoose.model('User', {
    email: {
        type: String,
        required: true
    },
    password:  {
        type: String,
        required: true

    }
});

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
module.exports = { User }