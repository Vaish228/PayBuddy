const mongoose=require('mongoose');

const groupSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }],
    expenses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Expense'
      }],
    totalAmount:{
        type:Number,
        default:0
    },
    groupBalance:{
        type:Number,
        default:0
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});
const Group= mongoose.model('Group',groupSchema);   
module.exports=Group;