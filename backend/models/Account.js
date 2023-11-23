const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
},{ timestamps: true });

module.exports = mongoose.model("Account", AccountSchema);