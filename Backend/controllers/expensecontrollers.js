const ExpenseService = require('../service/expenseservice.js');

const expensecontrollers = {
  async createExpense(req, res) {
    try {
      const expense = await ExpenseService.createExpense(req.body);
      res.status(201).json(expense);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getExpenseById(req, res) {
    try {
      const expense = await ExpenseService.getExpenseById(req.params.id);
      if (!expense) {
        return res.status(404).json({ error: 'Expense not found' });
      }
      res.status(200).json(expense);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getGroupExpenses(req, res) {
    try {
      const expenses = await ExpenseService.getGroupExpenses(req.params.groupId);
      res.status(200).json(expenses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getUserPaidExpenses(req, res) {
    try {
      const expenses = await ExpenseService.getUserPaidExpenses(req.params.userId);
      res.status(200).json(expenses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getUserSharedExpenses(req, res) {
    try {
      const expenses = await ExpenseService.getUserSharedExpenses(req.params.userId);
      res.status(200).json(expenses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateExpense(req, res) {
    try {
      const updatedExpense = await ExpenseService.updateExpense(req.params.id, req.body);
      res.status(200).json(updatedExpense);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteExpense(req, res) {
    try {
      const result = await ExpenseService.deleteExpense(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async calculateSettlement(req, res) {
    try {
      const settlement = await ExpenseService.calculateSettlement(req.params.groupId);
      res.status(200).json(settlement);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = expensecontrollers;
