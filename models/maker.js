const mongoose = require("mongoose");

const makerSchema = new mongoose.Schema({
  makerLastName: {
    type: String,
    trim: true,
    required: true,
    max: 32,
  },
  makerFirstName: {
    type: String,
    trim: true,
    required: true,
    max: 32,
  },
  makerEmail: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    lowercase: true,
  },
  makerLicState: {
    type: Array,
    required: true,
  },
  makerStateLicNo: {
    type: String,
    trim: true,
  },
  makerCoName: {
    type: String,
    trim: true,
    required: true,
  },
  makerPhoneNumber: {
    type: String,
    pattern: "^([0-9]{3}-[0-9]{3}-[0-9]{4}$",
  },
  makerAdditionalInfo: {
    type: {},
    max: 2000000,
  },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Maker", makerSchema);
