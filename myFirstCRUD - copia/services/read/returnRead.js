const readOne = require('./readOne');
const readAll = require('./readAll');

const allOneWorkers = async (req) => {
  const readType = req.body.readData;
  let resultsReads;
  switch (readType) {
    case 'one':
      resultsReads = await readOne(req);
      break;
    case 'all':
      resultsReads = await readAll(req);
      break;
    default:
  }
  return resultsReads;
};
module.exports = allOneWorkers;
