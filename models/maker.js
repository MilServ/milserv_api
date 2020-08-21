const mongoose = require("mongoose");

const veteranSchema = new mongoose.Schema({
  lastName: {
    type: String,
    trim: true,
    required: true,
    max: 32,
  },
  firstName: {
    type: String,
    trim: true,
    required: true,
    max: 32,
  },
  currentLocation: {
    type: String,
    trim: true,
    required: true,
  },
  projectedHOR: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    lowercase: true,
  },
  milAffiliation: {
    type: Number,
    default: 0,
    required: true,
  },
  careerInterest: {
    type: Number,
    default: 0,
  },
  additionalInfo: {
    type: {},
    max: 2000000,
  },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Veteran", veteranSchema);
