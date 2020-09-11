const fetch = require('node-fetch');

const fetchWorkers = require('../fetchWorkers');

const readOne = async (req) => {
  const reqTypeID = req.body.tipoIdentificacion;
  const reqNumberID = Number(req.body.numeroIdentificacion);

  const apiWorkers = await fetchWorkers(req);
  const resultsWorkers = apiWorkers.results;

  // prettier-ignore
  const findWorker = resultsWorkers.find(
    (worker) => worker.tipoIdentificacion === reqTypeID
      && worker.numeroIdentificacion === reqNumberID,
  );

  const readWorker = await fetch(findWorker.url);
  const readWorkerJSON = await readWorker.json();
  return readWorkerJSON;
};

module.exports = readOne;
