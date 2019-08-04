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

let getEmpleado = async(id) => { //promesas con async
    let empleadoDb = empleados.find(empleado => empleado.id === id) //se pone asi porque es un return de una sola linea
    if (!empleadoDb) {
        throw new Error(`no existe un empleado con el id ${id}`);
    } else {
        return empleadoDb;
    }
}
let getSalario = async(empleado) => {
        let salarioDb = salarios.find(salario => salario.id === empleado.id)
        if (!salarioDb) {
            throw new Error(`no se encontro un salario para el usurio ${empleado.nombre}`);
        } else {
            return {
                nombre: empleado.nombre,
                salario: salarioDb.salario
            };
        }
    }
    /*
    getEmpleado(2).then(empleado => { //asi ejecuto la promesa
            return getSalario(empleado); // asi habilito para poner el siguiente then respondiendo a la siguiente promsa 
        }) //asi debo manejar los errores siempre
        .then(res => {
            console.log(`el salario de ${res.nombre} es de ${res.salario}`);
        })
        .catch(err => { //asi capturo cualqueiro error de todas las prooemsas encadendasd
            console.log(err);
        });
    */
let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return `${resp.nombre} tiene un saladio de ${resp.salario}`
}

getInformacion(2).then(mensaje => {
        console.log(mensaje);
    })
    .catch(err => {
        console.log(err);
    })