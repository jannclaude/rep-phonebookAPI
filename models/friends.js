const mongoose = require('mongoose');



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