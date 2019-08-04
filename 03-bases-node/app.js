const { crearArchivo } = require(`./multiplicar`) //asi importo la funcion del otro archivo
    //let base = '5';
    //console.log(process.argv); // me da todos los datos 

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split("=")[1];

console.log(base);




crearArchivo(base)
    .then(archivo => console.log(`archivo creado: ${archivo}`))
    .catch(err => console.log(err))