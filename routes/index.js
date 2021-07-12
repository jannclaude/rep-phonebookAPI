const express = require('express');
const router = express.Router();

const { Friends } = require('../models/friends');

//Get all friends
router.get('/api/friends', (req, res) => {
    Friends.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

// Save friend
router.post('/api/friends/add', (req, res) => {
    const fri = new Friends({
        fname: req.body.fname,
        lname: req.body.lname,
        hphone: req.body.hphone,
        pphone: req.body.pphone,
        wphone: req.body.wphone,
        fphone: req.body.fphone
    });
    fri.save((err, data) => {
        res.status(200).json({code:200, message: 'Friend added successfully',
        addFriend:data})
    });
});


//Get single employee
router.get('/api/employee/:id', (req, res) => {
    Friends.findById(req.params.id, (err, data) => {
        if(!err){
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

module.exports = router;