const mongoose =require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB= async () =>{
    await mongoose.connect(process.env.MONGODB_URI)
    .then(() =>{
        console.log("Connected to database");
    })
    .catch((err) =>{
        console.log("Error connecting to database");
    });
}

module.exports=connectDB;