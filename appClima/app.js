const argv = require('yargs').options({ //esto es para no poner el -d y asi el comando queda node app <CIudad>
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima ',
        demand: true
    }

}).argv;

console.log(argv.direccion);