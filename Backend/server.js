const express= require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db.js');
const groupRouter = require('./routers/grouprouters.js');

dotenv.config();
const app=express();
const PORT =process.env.PORT;

connectDB();

app.use(express.json());


app.get('/',(req,res)=>{
    res.send("Hello first page");
})

app.use('/groups',groupRouter);


app.listen(PORT, () => {
    console.log("Server is running on port "+PORT);
});
 