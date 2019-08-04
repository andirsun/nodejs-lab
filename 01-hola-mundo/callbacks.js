/*setTimeout(function() {
    console.log('Hola mundo');
}, 3000);*/ //Asi se hace un callback sencillo con sintaxis neta de funcion, 

//mismo callback con funcioon fleccha
//setTimeout(() => {
//  console.log('hola mundo');
//}, 3000);

let getUsuarioById = (id, callback) => { //asi se implementa un callback
    let usuario = {
        nombre: 'anderson',
        id
    }
    if (id === 20) { //somulacion de un error
        callback(`El usuario con id ${id}, no existe en la base de datos`);
    } else {
        callback(null, usuario); //cuando tenga el usuario de la base datos llamo el callback con el err en null
    }
}

getUsuarioById(1, (err, usuario) => { //asi uso el callback que vi arriba 
    //asi se ejecuta en ela terminarl nodemon callbacks.js  3
    /*manejo el error primero*/
    if (err) {
        return console.log(err);

    }
    console.log('ususario de base de datos', usuario);
});
//Notas 
/*
1. es muy aconsejable que el primer paramtrro de un callback siempre sea el error por si alguno ocurre
*/