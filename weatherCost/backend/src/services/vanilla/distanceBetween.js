const degreesToRadians = (degrees) => (degrees * Math.PI) / 180;

const distanceBetweenKm = (coord1, coord2) => {
  const lat1 = coord1.latitute;
  const lon1 = coord1.longitute;

  const lat2 = coord2.latitute;
  const lon2 = coord2.longitute;

  const EARTH_RADIUS_KM = 6371;

  const dLat = degreesToRadians(lat2 - lat1);
  const dLon = degreesToRadians(lon2 - lon1);

  const rLat1 = degreesToRadians(lat1);
  const rLat2 = degreesToRadians(lat2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(rLat1) * Math.cos(rLat2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return EARTH_RADIUS_KM * c;
};

module.exports = distanceBetweenKm;
