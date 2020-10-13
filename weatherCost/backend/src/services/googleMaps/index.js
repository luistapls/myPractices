const beatifulDay = require('../vanilla/beatifulDay');
const convertCoordinate = require('../vanilla/convertCoordinate');
const createRoute = require('../googleMaps/createRoute');

const dataGoogleMaps = async (req) => {
  // const isBeatifulDay = await beatifulDay(req);

  const { coord1, coord2 } = req.params;
  const originLatLng = convertCoordinate(coord1);
  const destinationsLatLng = convertCoordinate(coord2);
  console.log(originLatLng, destinationsLatLng);
  await createRoute(originLatLng, destinationsLatLng);
};
module.exports = dataGoogleMaps;
