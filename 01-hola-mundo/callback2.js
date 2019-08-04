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


let getEmpleado = (id, callback) => {
        let empleadoDb = empleados.find(empleado => empleado.id === id) //se pone asi porque es un return de una sola linea
        if (!empleadoDb) {
            callback(`no existe un empleado con el id ${id}`);
        } else {
            callback(null, empleadoDb);
        }
    }
    /*let getSalario = (empleado, callback) => {//no Funciono mi implementacion
        let empleadoDb = empleados.find(empleado => empleado.id === empleado);
        let idEmpleado = empleado.id;
        let salario = salarios.find(salario => idEmpleado === empleado.id);

        if (!salario) {
            callback(`no se encontro un salario para el usurio ${empleadoDb.nombre}`);
        } else {
            let salarioById = {
                nombre: empleadoDb.nombre,
                salario: salario.salario
            }
            callback(null, salarioById)
        }

    }*/
let getSalario = (empleado, callback) => {

    let salarioDb = salarios.find(salario => salario.id === empleado.id)
    if (!salarioDb) {
        callback(`no se encontro un salario para el usurio ${empleado.nombre}`); //como solo tiene un paramttor el callback ese es el erro
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDb.salario
        });
    }

}

getEmpleado(3, (err, empleado) => {
    if (err) { // manejo el error
        return console.log(err);

    }

    getSalario(empleado, (err, resp) => { // calback anidaod para usar la informacion de la persona
            if (err) {
                console.log(err);
            } else {
                console.log(`el salario de la paersona ${resp.nombre} es de $ ${resp.salario}`);
            }
        })
        //console.log(empleado);
});