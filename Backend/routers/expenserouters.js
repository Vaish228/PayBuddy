
const express = require('express');
const expenseRouter = express.Router();
const expensecontrollers = require('../controllers/expensecontrollers.js');

expenseRouter.post('/', expensecontrollers.createExpense);

// Get expense by ID
expenseRouter.get('/:id', expensecontrollers.getExpenseById);

// Update expense
expenseRouter.put('/:id', expensecontrollers.updateExpense);

// Delete expense
expenseRouter.delete('/:id', expensecontrollers.deleteExpense);

// Get all expenses for a group
expenseRouter.get('/group/:groupId', expensecontrollers.getGroupExpenses);

// Get expenses paid by a user
expenseRouter.get('/paid-by/:userId', expensecontrollers.getUserPaidExpenses);

// Get expenses shared by a user
expenseRouter.get('/shared-by/:userId', expensecontrollers.getUserSharedExpenses);

// Calculate settlement plan for a group
expenseRouter.get('/settlement/:groupId', expensecontrollers.calculateSettlement);

module.exports = expenseRouter;