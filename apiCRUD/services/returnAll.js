const Employee = require('../models/Employee');

const returnAll = async () => {
  const allWorkers = await Employee.find(
    {},
    {
      tipoIdentificacion: 1,
      numeroIdentificacion: 1,
      url: 1,
    },
  );

  const data = {
    count: allWorkers.length,
    next: null,
    previous: null,
    results: allWorkers,
  };
  return data;
};

module.exports = returnAll;
