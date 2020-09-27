const fetchWorkers = require('../fetchWorkers');

const Worker = require('../../models/Worker');

const saveEmployee = async (req) => {
  const {
    names,
    lastNames,
    IDType,
    IDNumber,
    phone1,
    phone2,
    phone3,
    email,
    dateAdmission,
    monthlySalary,
  } = req.body;

  const apiWorkers = await fetchWorkers(req);

  const countWorkers = apiWorkers.count + 1;

  const phoneNumbers = [phone1, phone2, phone3];
  const url = `${req.protocol}://${req.get(
    'host',
  )}/api/workers/${countWorkers}`;

  const createWorker = new Worker({
    names,
    lastNames,
    IDType,
    IDNumber,
    phoneNumbers,
    email,
    dateAdmission,
    monthlySalary,
    url,
  });

  await createWorker.save();
};

module.exports = saveEmployee;
