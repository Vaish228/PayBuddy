const mongoose =require('mongoose');

const expenseSchema = new mongoose.Schema({
    title: String,
    amount: { type: Number, required: true },
    paidBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    sharedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
    createdAt: { type: Date, default: Date.now }
  });
  
  
  const ExpenseModel=mongoose.model('expense',expenseSchema);
  module.exports=ExpenseModel;