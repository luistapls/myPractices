const beatifulDay = require('./beatifulDay');
const distanceBetween = require('./distanceBetween');
const convertCoordinate = require('./convertCoordinate');

const dataDelivery = async (req) => {
  try {
    const isBeatifulDay = await beatifulDay(req);

    const { coord1, coord2 } = req.params;
    const latLon1 = convertCoordinate(coord1);
    const latLon2 = convertCoordinate(coord2);

    const distance = distanceBetween(latLon1, latLon2);
    const costPerKilometerInUSD = isBeatifulDay ? 0.1 : 0.15;

    const cost = (distance * costPerKilometerInUSD).toFixed(2);

    const data = {
      totalCost: cost,
    };

    return data;
  } catch {
    const data = {
      error: 'No matching location found.',
    };
    return data;
  }
};

module.exports = dataDelivery;
