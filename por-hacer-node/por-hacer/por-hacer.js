const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    //coje el aarreglo del listado por hacer , lovuelve un json y lo guarda en un archivo 
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw Error('Ups, no se pudo grabar', err);
    });
}
const cargarDB = () => {
    try { //deo hacer try y catch por si el json de la db esta vacio entonces que no se estalle
        listadoPorHacer = require('../db/data.json');
    } catch (err) {
        listadoPorHacer = [];
    }

}
const crear = (descripcion) => {
    //La funcion recibe una descripcion, crea un objeto tarea con esa descripcion y sin completar y luego la
    //mete en el listado de mis tareas pendientes o por hacer

    cargarDB(); //primero debo cargar la base de datps del archivo

    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}
const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => { //se busca una tarea que tenga esa descripcion para actualizarla
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}
const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}







module.exports = {
    crear, //exporto la funcion de crear
    getListado,
    actualizar,
    borrar
}