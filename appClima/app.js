const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({ //esto es para no poner el -d y asi el comando queda node app <CIudad>
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima ',
        demand: true
    }

}).argv;

/*Version Optimizada*/
const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp} Grados Celcius`;
    } catch {
        return `No se pudo determinar el clima de ${direccion}`;

    }
}

/* Mi version
const getInfo = async(direccion) => {
    const coords = await lugar.getLugarLaLng(direccion)
        .then(res => {
            const temperatura = clima.getClima(res.lat, res.lng)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(`no se pudo obtener la temperatura del lugar${direccion}`);
                });
        })
        .catch(err => {
            console.log(`no pude localizar la el lugar ${direccion}`);
        });
};        
*/

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);