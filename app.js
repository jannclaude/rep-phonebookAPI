const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.json({extended: false}));

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
app.use('/', require('./routes/index2'));


app.listen(3000);