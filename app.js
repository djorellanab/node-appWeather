const {argv} = require('./config/yargs');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getData= async() =>
{
    let city = await lugar.getDireccion(argv.direccion);
    let weather = await clima.getClima(city.latitude, city.longitude);
    return `el clima es de: ${weather}, en la ciudad: ${city.direccion} `;
};

getData().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err.message);
});