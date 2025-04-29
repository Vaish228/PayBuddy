const mongoose =require('mongoose');

const userScehma= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    groups: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
      }],
    
    balance: {
        type: Number,
        default: 0  // net balance (positive = others owe them, negative = they owe others)
      },   
});

const User= mongoose.model('User',userScehma);
module.exports=User;
