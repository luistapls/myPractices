const mongoose = require('mongoose');

const { Schema } = mongoose;

const EmployeeSchema = new Schema({
  nombres: { type: String, required: true },
  apellidos: { type: String, required: true },
  tipoIdentificacion: { type: String, required: true },
  numeroIdentificacion: { type: Number, required: true },
  tresNumerosTelefonicos: { type: Array, required: false },
  correoElectronico: { type: String, required: false },
  fechaIngreso: { type: Date, required: false },
  salarioMensual: { type: Number, required: true },
  url: { type: String, required: true },
});

module.exports = mongoose.model('Employee', EmployeeSchema);
