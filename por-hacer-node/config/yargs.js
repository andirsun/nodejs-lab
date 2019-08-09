const argv = require('yargs')
    .command('crear', 'crear elemento por hacer', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completado', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .help()
    .argv;
module.exports = {
    argv
}