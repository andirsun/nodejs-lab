function sumar(a, b) { //funcion normal
    return a + b;
}

//reemplazo por funcion flecha
let sumar1 = (a, b) => {
    return a + b;
}

//si el retorno solo ocupa una linea se pued eescribir asi
let sumar2 = (a, b) => a + b;

//otro ejemplo 
function saludar(nombre) {
    return `hola ${nombre}`;
}
//en flecha seria 
let saludar1 = (nombre) => `hola ${nombre}`;
console.log(saludar1("anderson"));