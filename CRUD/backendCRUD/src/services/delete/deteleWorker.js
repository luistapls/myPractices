const Worker = require('../../models/Worker');

const deleteWorker = async (req) => {
  const { IDType, IDNumber } = req.body;

  await Worker.findOneAndRemove({ IDType, IDNumber });
};

module.exports = deleteWorker;
