const mongoose = require("mongoose");

const retailerSchema = new mongoose.Schema({
  retLastName: {
    type: String,
    trim: true,
    required: true,
    max: 32,
  },
  retFirstName: {
    type: String,
    trim: true,
    required: true,
    max: 32,
  },
  retEmail: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    lowercase: true,
  },
  licState: {
    type: Array,
    required: true,
  },
  stateLicNo: {
    type: String,
    trim: true,
  },
  coName: {
    type: String,
    trim: true,
    required: true,
  },
  retPhoneNumber: {
    type: String,
    pattern: "^([0-9]{3}-[0-9]{3}-[0-9]{4}$",
  },
  retAdditionalInfo: {
    type: {},
    max: 2000000,
  },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Retailer", retailerSchema);
