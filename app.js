const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());

const dotenv = require('dotenv');

app.get('/', (req, res) => {
    res.send("Hello World!");
});

const connectDB = require('./config/db');

//Load config
dotenv.config({ path: './config/config.env'});

connectDB();

// Routes
app.use('/', require('./routes/index'));

//model api
var schema = new mongoose.Schema(
    {
        email: "string",
        password: "string"
    }
);

var User = mongoose.model('User', schema);

//signup route api
app.post("/signup", async (req, res) => {
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
app.post("/login", async (req, res) =>{
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

app.listen(process.env.PORT || 3000);