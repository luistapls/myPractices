const findID = require('../update/findID');

const Employee = require('../../models/Employee');

const deleteWorker = async (req) => {
  const idWorker = await findID(req);
  await Employee.findByIdAndDelete(idWorker);
};

module.exports = deleteWorker;
