const findID = require('./findID');

const Employee = require('../../models/Employee');

const uploadWorker = async (req) => {
  const {
    nombres,
    apellidos,
    tipoIdentificacion,
    numeroIdentificacion,
    telefono1,
    telefono2,
    telefono3,
    correoElectronico,
    fechaIngreso,
    salarioMensual,
  } = req.body;

  const idWorker = await findID(req);

  const tresNumerosTelefonicos = [telefono1, telefono2, telefono3];

  await Employee.findByIdAndUpdate(idWorker, {
    nombres,
    apellidos,
    tipoIdentificacion,
    numeroIdentificacion,
    tresNumerosTelefonicos,
    correoElectronico,
    fechaIngreso,
    salarioMensual,
  });
};

module.exports = uploadWorker;
