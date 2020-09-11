const readOne = require('../read/readOne');

const Employee = require('../../models/Employee');

const deleteWorker = async (req) => {
  const worker = await readOne(req);
  const idWorker = worker._id;

  await Employee.findOneAndRemove(idWorker);
};

module.exports = deleteWorker;
