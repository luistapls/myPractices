const Employee = require('../models/Employee');

const returnOne = async (req) => {
  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  const worker = await Employee.findOne(
    { url: fullUrl },
    { url: 0, __v: 0, _id: 0 },
  );
  return worker;
};

module.exports = returnOne;
