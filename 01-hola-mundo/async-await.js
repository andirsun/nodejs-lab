/*let getNombre = async() => { //el async me quita toda la sintazis de hacer una promesa
    //el async tambien ya me atrapa todos los errires automaticamente
    // throw new Error('no Existe un nombre para este usuario'); //asi puedo provocar un error
    return 'Anderson';
};*/

//console.log(getNombre());

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Anderson');
        }, 3000)

    });
}

let saludo = async() => {
    let nombre = await getNombre(); //javascript no continua de esta linea hasta que tenga la respuesta de nombre, osea 
    //hasta que la promesa se cumpla y resuelva el nombrew
    return `hola ${nombre}`;
}
saludo().then(mensaje => {

    console.log(mensaje);
})