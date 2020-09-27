const mongoose = require('mongoose');

const { Schema } = mongoose;

const WorkerSchema = new Schema({
  names: { type: String, required: true },
  lastNames: { type: String, required: true },
  IDType: { type: String, required: true },
  IDNumber: { type: Number, required: true },
  phoneNumbers: { type: Array, required: false },
  email: { type: String, required: false },
  dateAdmission: { type: Date, required: false },
  monthlySalary: { type: Number, required: true },
  url: { type: String, required: true },
});

module.exports = mongoose.model('Worker', WorkerSchema);
