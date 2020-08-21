const mongoose = require("mongoose");

const distributorSchema = new mongoose.Schema({
  distLastName: {
    type: String,
    trim: true,
    required: true,
    max: 32,
  },
  distFirstName: {
    type: String,
    trim: true,
    required: true,
    max: 32,
  },
  distEmail: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    lowercase: true,
  },
  distLicState: {
    type: Array,
    required: true,
  },
  disStateLicNo: {
    type: String,
    trim: true,
  },
  distCoName: {
    type: String,
    trim: true,
    required: true,
  },
  distPhoneNumber: {
    type: String,
    pattern: "^([0-9]{3}-[0-9]{3}-[0-9]{4}$",
  },
  distAdditionalInfo: {
    type: {},
    max: 2000000,
  },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Distributor", distributorSchema);
