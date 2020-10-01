const fetch = require('node-fetch');
const URL_DATA = require('../../data/URL_DATA.json');

const distanceMatrix = async (latLon1, latLon2) => {
  const coord1 = `${latLon1.latitute},${latLon1.longitute}`;
  const coord2 = `${latLon2.latitute},${latLon2.longitute}`;

  const fetchDistanceMatrix = await fetch(
    `${URL_DATA.URL_API_DISTANCE_MATRIX}origins=${coord1}&destinations=${coord2}&key=${URL_DATA.DISTANCE_MATRIX_KEY}`,
  );
  const dataDistanceMatrix = await fetchDistanceMatrix.json();

  return dataDistanceMatrix;
};
module.exports = distanceMatrix;
