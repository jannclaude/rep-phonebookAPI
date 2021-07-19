const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

var { Users } = require('../models/users');

//signup route api
router.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    let user = await Users.findOne({ email });

    if (user) {
        return res.json({ message: "Email already taken" });
    }

    user = new Users({
        email,
        password,
    });

    await user.save();
    var token = jwt.sign({ id: user.id }, "password");
    res.json({ token: token });
});

//get router api
router.get('/api/users', (req, res) => {
    Users.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

//login route api
router.post("/login", async (req, res) =>{
    const { email, password } = req.body;
    console.log(email);

    let user = await Users.findOne({ email });
    console.log(user);

    if(!user) {
        return res.json({ message: "No user found with that email" });
    }
    if(user.password !== password) {
        return res.json({ message: "Password is not correct" });
    }

    var token = jwt.sign({ id: user.id }, "password");
    return res.json({ token: token });
});

module.exports = router;

