const fetch = require('node-fetch');

const fetchWorkers = async (req) => {
  const urlFetch = `${req.protocol}://${req.get('host')}/api/workers`;
  const workers = await fetch(urlFetch);
  const workersJSON = await workers.json();
  return workersJSON;
};
module.exports = fetchWorkers;
