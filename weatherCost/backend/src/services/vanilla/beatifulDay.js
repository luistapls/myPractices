const fetch = require('node-fetch');
const URL_DATA = require('../../data/URL_DATA.json');

const beatifulDay = async (req) => {
  const fetchWeather1 = await fetch(
    `${URL_DATA.URL_API_WEATHER_CURRENT}${URL_DATA.WEATHER_KEY}&q=${req.params.coord1}`,
  );
  const weather1 = await fetchWeather1.json();
  const fetchWeather2 = await fetch(
    `${URL_DATA.URL_API_WEATHER_CURRENT}${URL_DATA.WEATHER_KEY}&q=${req.params.coord2}`,
  );
  const weather2 = await fetchWeather2.json();

  const GOOD_WEATHER_LIMIT_CODE = 1087;

  return (
    GOOD_WEATHER_LIMIT_CODE >= weather1.current.condition.code &&
    GOOD_WEATHER_LIMIT_CODE >= weather2.current.condition.code
  );
};

module.exports = beatifulDay;
