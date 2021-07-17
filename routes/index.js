const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');

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
        phone: req.body.phone,
    });
    fri.save((err, data) => {
        res.status(200).json({code:200, message: 'Friend added successfully',
        addFriend:data})
    });
});


//Get single friend
router.get('/api/friends/:id', (req, res) => {
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
    const result = await Friends.findByIdAndDelete({_id: req.params.id});
    res.json(result);
});

//Update a friend
router.patch('/update/:id', async (req, res) => {
    const patch = await Friends.updateOne({_id: req.params.id}, {$set: req.body});
    res.json(patch);
});

//signup route api
router.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    let user = await User.findOne({ email });

    if (user) {
        return res.json({ msg: "Email already taken" });
    }

    user = new User({
        email,
        password,
    });

    await user.save();
    var token = jwt.sign({ id: user.id }, "password");
    res.json({ token: token });
});

//login route api
router.post("/login", async (req, res) =>{
    const { email, password } = req.body;
    console.log(email);

    let user = await User.findOne({ email });
    console.log(user);

    if(!user) {
        return res.json({ msg: "no user found with that email" });
    }
    if(user.password !== password) {
        return res.json({ msg: "password is not correct" });
    }

    var token = jwt.sign({ id: user.id }, "password");
    return res.json({ token: token });
});

module.exports = router;