const mongoose = require('mongoose');

const userScehma = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
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

const User = mongoose.model('User', userScehma);
module.exports = User;
