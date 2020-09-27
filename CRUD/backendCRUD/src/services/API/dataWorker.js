const Worker = require('../../models/Worker');

const oneWorkerData = async (req) => {
  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  const dataWorker = await Worker.findOne({ url: fullUrl }, { url: 0, __v: 0 });
  return dataWorker;
};

module.exports = oneWorkerData;
