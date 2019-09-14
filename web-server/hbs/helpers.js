const hbs = require('hbs');//esto es la libreria de handlebars para reutilizar componentes

/////////////
hbs.registerHelper('getAnio',() =>{
    return new Date().getFullYear();
});
hbs.registerHelper('capitalizar',(texto) =>{
    let palabras = texto.split(' ');
    palabras.forEach((element,ind) => {
        element[ind] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
        
    });
    return palabras.join(' ');
});