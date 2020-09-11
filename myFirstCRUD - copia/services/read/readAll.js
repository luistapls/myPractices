const fetch = require('node-fetch');

const fetchWorkers = require('../fetchWorkers');

const readAll = async (req) => {
  const apiWorkers = await fetchWorkers(req);
  const resultsWorkers = apiWorkers.results;

  const readWorkers = await Promise.all(
    resultsWorkers.map(async (worker) => {
      const readWorker = await fetch(worker.url);
      const readWorkerJSON = await readWorker.json();
      return readWorkerJSON;
    }),
  );
  return readWorkers;
};

module.exports = readAll;
