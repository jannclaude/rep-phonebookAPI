const mongoose = require('mongoose');

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect("mongodb+srv://claude08:claude08@mongoapi.nmwrm.mongodb.net/api-mongo", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log(`Mongo DB Connected: ${conn.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

    module.exports = connectDB;