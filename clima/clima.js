const axios = require('axios');
const routesWeatherMap = require('../routes/weather-map/weaher-map');
const globalsConfig = require('../config/globals/globals')

const {buildRoute} = require('../helpers/routes');

let getClima = async (lat, lon) =>
{
    let paramsQuery = {
        lat,
        lon,
        appid : globalsConfig.openWeatherMap.API_Key,
        units : "metric"
    };
    let uri = buildRoute(routesWeatherMap.domain, routesWeatherMap.slugs.weather,paramsQuery);
    let res = await axios.get(uri);
    return res.data.main.temp;
}
module.exports = {
    getClima
};