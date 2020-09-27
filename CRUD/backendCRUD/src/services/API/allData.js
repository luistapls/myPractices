const Worker = require('../../models/Worker');

const dataWorkers = async () => {
  const allWorkers = await Worker.find(
    {},
    {
      IDType: 1,
      IDNumber: 1,
      url: 1,
      _id: 0,
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

module.exports = dataWorkers;
