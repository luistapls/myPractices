const { Client } = require('@googlemaps/google-maps-services-js');
const polyline = require('@mapbox/polyline');

const PATH_DATA = require('../../data/PATH_DATA.json');

const client = new Client({});

const createRoute = async (originLatLng, destinationsLatLng) => {
  const paramsDirections = {
    origin: { lat: 10.170427, lng: -67.911986 },
    destination: { lat: 10.47715, lng: -66.806188 },
    departure_time: 'now',
    mode: 'driving',
    traffic_model: 'pessimistic',
    key: process.env.DISTANCE_MATRIX_KEY,
  };

  client
    .directions({ params: paramsDirections })
    .then((dataDirections) => {
      const arraySteps = dataDirections.data.routes[0].legs[0].steps;

      const polylineStep = arraySteps[0].polyline.points;
      const arrayPath = polyline.decode(polylineStep);

      console.log(arrayPath);
      arrayPath.forEach((coordPath) => {
        client
          .reverseGeocode({
            params: {
              latlng: coordPath,
              key: process.env.DISTANCE_MATRIX_KEY,
            },
          })
          .then((dataReverseGeocode) => {
            const createAddressArray = (formattedAddress) => {
              const addressArrayWhitoutSpaces = formattedAddress
                .replace(/\s*,\s*/g, ',')
                .split(',');
              if (addressArrayWhitoutSpaces.length > 3) {
                return addressArrayWhitoutSpaces
                  .slice(
                    addressArrayWhitoutSpaces.length - 3,
                    addressArrayWhitoutSpaces.length,
                  )
                  .reverse();
              }
              return addressArrayWhitoutSpaces.reverse();
            };

            const addressArray = createAddressArray(
              dataReverseGeocode.data.results[0].formatted_address,
            );

            const knowCost = (address) => {
              const country = address[0];
              const state = address[1];
              const city = address[2];
              let cost;

              if (PATH_DATA[country]) {
                cost = PATH_DATA[country].cost;
                if (PATH_DATA[country][state]) {
                  cost = PATH_DATA[country][state].cost;
                  if (PATH_DATA[country][state][city]) {
                    cost = PATH_DATA[country][state][city].cost;
                  }
                }
              } else {
                cost = PATH_DATA.International.cost;
              }
              return cost;
            };
            const costPerKilometer = knowCost(addressArray);

            console.log(addressArray);
            console.log(costPerKilometer);

            /*
            console.log(addressArrayReduced);

            const addressToFind = `${addressArrayReduced[0]}, ${addressArrayReduced[1]}, ${addressArrayReduced[2]}`;

            console.log(PATH_DATA[addressToFind]); */
          })
          .catch((error) => console.log(error));
      });

      /* arraySteps.forEach((step) => {
        const polylineStep = step.polyline.points;
        const arrayPath = polyline.decode(polylineStep);
      }); */
    })
    .catch((error) => console.log(error));
};
module.exports = createRoute;
