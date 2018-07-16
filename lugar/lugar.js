const axios = require('axios');
const routesGoogleMap = require('../routes/google/map/map');
const globalsConfig = require('../config/globals/globals')

const {buildRoute} = require('../helpers/routes');

let getDireccion = async (direccion) =>
{
    let paramsQuery = {
        address: direccion,
        key: globalsConfig.google.API_Key
    };
    let uri = buildRoute(routesGoogleMap.domain, routesGoogleMap.slugs.geocode,paramsQuery);
    let res = await axios.get(uri);
    if (res.data.status === "ZERO_RESULTS"){
        throw new Error("No hay resultado para la ciudad: ", direccion);
    }
    return {
        direccion: res.data.results[0].formatted_address,
        latitude: res.data.results[0].geometry.location.lat,
        longitude: res.data.results[0].geometry.location.lng
    };
}
module.exports = {
    getDireccion
};