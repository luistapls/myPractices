const beatifulDay = require('../vanilla/beatifulDay');
const convertCoordinate = require('../vanilla/convertCoordinate');
const distanceMatrix = require('./distanceMatrix');

const dataDeliveryGoogle = async (req) => {
  try {
    const isBeatifulDay = await beatifulDay(req);

    const { coord1, coord2 } = req.params;
    const latLon1 = convertCoordinate(coord1);
    const latLon2 = convertCoordinate(coord2);

    const dataDistanceMatrix = await distanceMatrix(latLon1, latLon2);

    const distance =
      dataDistanceMatrix.rows[0].elements[0].distance.value / 1000;
    const time = Math.round(
      dataDistanceMatrix.rows[0].elements[0].duration.value / 60,
    );

    const costPerKilometerInUSD = isBeatifulDay ? 0.1 : 0.15;
    const cost = Number((distance * costPerKilometerInUSD).toFixed(2));

    const data = {
      totalCost: cost,
      timeDelivery: time,
    };

    return data;
  } catch {
    const data = {
      error: 'No matching location found.',
    };
    return data;
  }
};

module.exports = dataDeliveryGoogle;
