const Expense = require('../models/expensemodels.js');
const User = require('../models/usermodels.js');
const Group = require('../models/groupmodels.js');
const mongoose = require('mongoose');

class ExpenseService {
  
  async createExpense(expenseData) {
    const session = await mongoose.startSession();
    session.startTransaction();
    
    try {
      const expense = new Expense({
        title: expenseData.title,
        amount: expenseData.amount,
        paidBy: expenseData.paidBy,
        sharedBy: expenseData.sharedBy,
        group: expenseData.group,
      });
    
      await expense.save({ session });
      
      await Group.findByIdAndUpdate(
        expenseData.group,
        { 
          $push: { expenses: expense._id },
          $inc: { totalAmount: expenseData.amount }
        },
        { session }
      );

      const sharedByCount = expenseData.sharedBy.length;
      const shareAmount = expenseData.amount / sharedByCount;
      
      await User.findByIdAndUpdate(
        expenseData.paidBy,
        { $inc: { balance: expenseData.amount - (expenseData.sharedBy.includes(expenseData.paidBy.toString()) ? shareAmount : 0) } },
        { session }
      );
      
      for (const userId of expenseData.sharedBy) {
        if (userId.toString() !== expenseData.paidBy.toString()) {
          await User.findByIdAndUpdate(
            userId,
            { $inc: { balance: -shareAmount } },
            { session }
          );
        }
      }

      await session.commitTransaction();
      session.endSession();
      
      return expense;
    } catch (error) {
      await session.abortTransaction();
      session.endSession();
      throw error;
    }
  }

  
  async getExpenseById(expenseId) {
    return await Expense.findById(expenseId)
      .populate('paidBy', 'name email')
      .populate('sharedBy', 'name email')
      .populate('group', 'name');
  }

  
  async getGroupExpenses(groupId) {
    return await Expense.find({ group: groupId })
      .populate('paidBy', 'name email')
      .populate('sharedBy', 'name email')
      .sort({ createdAt: -1 });
  }

  
  async getUserPaidExpenses(userId) {
    return await Expense.find({ paidBy: userId })
      .populate('group', 'name')
      .populate('sharedBy', 'name email')
      .sort({ createdAt: -1 });
  }

  
  async getUserSharedExpenses(userId) {
    return await Expense.find({ sharedBy: userId })
      .populate('paidBy', 'name email')
      .populate('group', 'name')
      .sort({ createdAt: -1 });
  }

  async updateExpense(expenseId, updateData) {
    const session = await mongoose.startSession();
    session.startTransaction();
    
    try {  const originalExpense = await Expense.findById(expenseId);
      if (!originalExpense) {
        throw new Error('Expense not found');
      }
      const newAmount = updateData.amount || originalExpense.amount;
      const newSharedBy = updateData.sharedBy || originalExpense.sharedBy;
      const newPaidBy = updateData.paidBy || originalExpense.paidBy;
      
      const amountDiff = newAmount - originalExpense.amount;
      
      const origSharedByCount = originalExpense.sharedBy.length;
      const origShareAmount = originalExpense.amount / origSharedByCount;
      
      await User.findByIdAndUpdate(
        originalExpense.paidBy,
        { 
          $inc: { 
            balance: -(originalExpense.amount - (originalExpense.sharedBy.includes(originalExpense.paidBy.toString()) ? origShareAmount : 0)) 
          } 
        },
        { session }
      );
      
      for (const userId of originalExpense.sharedBy) {
        if (userId.toString() !== originalExpense.paidBy.toString()) {
          await User.findByIdAndUpdate(
            userId,
            { $inc: { balance: origShareAmount } },
            { session }
          );
        }
      }
      
      const newSharedByCount = newSharedBy.length;
      const newShareAmount = newAmount / newSharedByCount;
      
      await User.findByIdAndUpdate(
        newPaidBy,
        { 
          $inc: { 
            balance: newAmount - (newSharedBy.includes(newPaidBy.toString()) ? newShareAmount : 0) 
          } 
        },
        { session }
      );
      
       for (const userId of newSharedBy) {
        if (userId.toString() !== newPaidBy.toString()) {
          await User.findByIdAndUpdate(
            userId,
            { $inc: { balance: -newShareAmount } },
            { session }
          );
        }
      }
      
      if (amountDiff !== 0) {
        await Group.findByIdAndUpdate(
          originalExpense.group,
          { $inc: { totalAmount: amountDiff } },
          { session }
        );
      }
      
       const updatedExpense = await Expense.findByIdAndUpdate(
        expenseId,
        updateData,
        { new: true, session }
      );
      
      await session.commitTransaction();
      session.endSession();
      
      return updatedExpense;
    } catch (error) {
      await session.abortTransaction();
      session.endSession();
      throw error;
    }
  }

 
  async deleteExpense(expenseId) {
    const session = await mongoose.startSession();
    session.startTransaction();
    
    try {
      const expense = await Expense.findById(expenseId);
      if (!expense) {
        throw new Error('Expense not found');
      }
      
      const sharedByCount = expense.sharedBy.length;
      const shareAmount = expense.amount / sharedByCount;
      
      await User.findByIdAndUpdate(
        expense.paidBy,
        { 
          $inc: { 
            balance: -(expense.amount - (expense.sharedBy.includes(expense.paidBy.toString()) ? shareAmount : 0)) 
          } 
        },
        { session }
      );
      
      for (const userId of expense.sharedBy) {
        if (userId.toString() !== expense.paidBy.toString()) {
          await User.findByIdAndUpdate(
            userId,
            { $inc: { balance: shareAmount } },
            { session }
          );
        }
      }
      
      await Group.findByIdAndUpdate(
        expense.group,
        { 
          $pull: { expenses: expense._id },
          $inc: { totalAmount: -expense.amount }
        },
        { session }
      );
      
      await Expense.findByIdAndDelete(expenseId, { session });
      
      await session.commitTransaction();
      session.endSession();
      
      return { success: true, message: 'Expense deleted successfully' };
    } catch (error) {
      await session.abortTransaction();
      session.endSession();
      throw error;
    }
  }

  
  async calculateSettlement(groupId) {
    const group = await Group.findById(groupId).populate('members', 'name email balance');
    if (!group) {
      throw new Error('Group not found');
    }
    
    const members = group.members.map(member => ({
      _id: member._id,
      name: member.name,
      email: member.email,
      balance: member.balance
    }));
    
    const settlement = [];
    const debtors = members.filter(m => m.balance < 0).sort((a, b) => a.balance - b.balance);
    const creditors = members.filter(m => m.balance > 0).sort((a, b) => b.balance - a.balance);
    
    let i = 0, j = 0;
    while (i < debtors.length && j < creditors.length) {
      const debtor = debtors[i];
      const creditor = creditors[j];
      
      const amount = Math.min(Math.abs(debtor.balance), creditor.balance);
      
      if (amount > 0) {
        settlement.push({
          from: debtor._id,
          fromName: debtor.name,
          to: creditor._id,
          toName: creditor.name,
          amount: parseFloat(amount.toFixed(2))
        });
        
        debtor.balance += amount;
        creditor.balance -= amount;
      }
      
      if (Math.abs(debtor.balance) < 0.01) i++;
      if (Math.abs(creditor.balance) < 0.01) j++;
    }
    
    return settlement;
  }
}

module.exports = new ExpenseService();