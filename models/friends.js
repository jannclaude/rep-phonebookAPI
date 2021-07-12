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
    hphone: {
        type: String,
        required: true
    },
    pphone: {
        type: String,
        required: true
    },
    wphone: {
        type: String,
        required: true
    },
    fphone: {
        type: String,
        required: true
    }
});

module.exports = { Friends }