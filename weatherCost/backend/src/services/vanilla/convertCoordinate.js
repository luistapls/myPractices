const convertCoordinate = (coordinate) => {
  const regExp = /([^,]+)/g;
  const arrayCoord = coordinate.match(regExp);
  const data = {
    lat: Number(arrayCoord[0]),
    lng: Number(arrayCoord[1]),
  };
  return data;
};

module.exports = convertCoordinate;
