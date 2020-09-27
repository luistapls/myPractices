const Worker = require('../../models/Worker');

const uploadWorker = async (req) => {
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
    _id,
  } = req.body;

  const phoneNumbers = [phone1, phone2, phone3];

  await Worker.findByIdAndUpdate(_id, {
    names,
    lastNames,
    IDType,
    IDNumber,
    phoneNumbers,
    email,
    dateAdmission,
    monthlySalary,
  });
};

module.exports = uploadWorker;
