const argv = require('./config/yargs').argv;


let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('crear por jacer');
        break;
    case 'listar':
        console.log('listar las tareas por hacer');
        break;
    case 'atualizar':
        console.log('actualiza una tarea por hacer');
        break;
    default:
        console.log("comando no es reconocido");
        break;

}