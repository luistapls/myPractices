const fetchWorkers = require('../fetchWorkers');

const Employee = require('../../models/Employee');

const saveEmployee = async (req) => {
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

  const apiWorkers = await fetchWorkers(req);

  const countWorkers = apiWorkers.count + 1;

  const tresNumerosTelefonicos = [telefono1, telefono2, telefono3];
  /* const url = `${req.protocol}://${req.get(
    'host',
  )}/api/workers/${countWorkers}`; */
  const url = `http://localhost:3000/api/workers/${countWorkers}`;

  const createWorker = new Employee({
    nombres,
    apellidos,
    tipoIdentificacion,
    numeroIdentificacion,
    tresNumerosTelefonicos,
    correoElectronico,
    fechaIngreso,
    salarioMensual,
    url,
  });

  await createWorker.save();
};

module.exports = saveEmployee;
