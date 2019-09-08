const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'

};
const completado = {

    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'

};
const argv = require('yargs')
    .command('crear', 'crear elemento por hacer', { //para correr este comando y los otros poner en la terminal node app crear 
        descripcion

    })
    .command('borrar', 'Eliminar una tarea por hacer', { //para correr este comando y los otros poner en la terminal node app crear 
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado', {
        descripcion, //es lo mismo que decir descripcion : descripcion que es el objeto que cree arriba paran o repetir eso msmo 
        completado
    })
    .help()
    .argv;
module.exports = {
    argv
};