const convertCoordinate = (coordinate) => {
  const regExp = /([^,]+)/g;
  const arrayCoord = coordinate.match(regExp);
  const data = {
    latitute: Number(arrayCoord[0]),
    longitute: Number(arrayCoord[1]),
  };
  return data;
};

module.exports = convertCoordinate;
