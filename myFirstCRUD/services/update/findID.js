const fetchWorkers = require('../fetchWorkers');

const findID = async (req) => {
  const reqTypeID = req.body.tipoIdentificacionFind;
  const reqNumberID = Number(req.body.numeroIdentificacionFind);

  const apiWorkers = await fetchWorkers(req);
  const resultsWorkers = apiWorkers.results;

  // prettier-ignore
  const findWorker = resultsWorkers.find(
    (worker) => worker.tipoIdentificacion === reqTypeID
      && worker.numeroIdentificacion === reqNumberID,
  );
  return findWorker._id;
};

module.exports = findID;
