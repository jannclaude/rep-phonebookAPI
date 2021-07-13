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
        phone: req.body.hphone,
    });
    fri.save((err, data) => {
        res.status(200).json({code:200, message: 'Friend added successfully',
        addFriend:data})
    });
});


//Get single friend
router.get('/api/employee/:id', (req, res) => {
    Friends.findById(req.params.id, (err, data) => {
        if(!err){
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

//Delete friend
router.delete('/delete/:id', async (req,res) => {
    const result = await Post.findByIdAndDelete({_id: req.params.id});
    res.json(result);
});

//Update a friend
router.patch('/update/:id', async (req, res) => {
    const patch = await Post.updateOne({_id: req.params.id}, {$set: req.body});
    res.json(patch);
});

module.exports = router;