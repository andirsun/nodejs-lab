let empleados = [{
        id: 1,
        nombre: 'anderson'
    }, {
        id: 2,
        nombre: 'Juliana'
    },
    {
        id: 3,
        nombre: 'Poncio Pilato'
    }
];
let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => { // el resolve se llama si la promersa es exitosa , el reject si falla 
        let empleadoDb = empleados.find(empleado => empleado.id === id) //se pone asi porque es un return de una sola linea
        if (!empleadoDb) {
            reject(`no existe un empleado con el id ${id}`);
        } else {
            resolve(empleadoDb);
        }
    });
}
let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDb = salarios.find(salario => salario.id === empleado.id)
        if (!salarioDb) {
            reject(`no se encontro un salario para el usurio ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDb.salario
            });
        }
    });
}

/*
getEmpleado(1).then(empleado => { //asi ejecuto la promesa
    getSalario(empleado).then(res => { //asi ejecuto la promesa
        console.log(`el salario de ${res.nombre} es de ${res.salario}`);
    }, err => console.log(err)); //asi debo manejar los errores siempre

}, (err) => console.log(err)); //asi debo manejar los errores siempre
*/
//Asi se manejan bien las promesas encadenadas 
getEmpleado(2).then(empleado => { //asi ejecuto la promesa
        return getSalario(empleado); // asi habilito para poner el siguiente then respondiendo a la siguiente promsa 
    }) //asi debo manejar los errores siempre
    .then(res => {
        console.log(`el salario de ${res.nombre} es de ${res.salario}`);
    })
    .catch(err => { //asi capturo cualqueiro error de todas las prooemsas encadendasd
        console.log(err);
    });