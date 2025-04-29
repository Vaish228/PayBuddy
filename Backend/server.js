const express= require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db.js');

dotenv.config();
const app=express();
const PORT =process.env.PORT;

connectDB();

app.listen(PORT, () => {
    console.log("Server is running on port "+PORT);
});
 