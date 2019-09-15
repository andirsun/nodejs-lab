const express = require('express'); //importo exprss de node modules
const app = express(); //para poder usar expres
const hbs = require('hbs');//esto es la libreria de handlebars para reutilizar componentes

require('./hbs/helpers');
const port=process.env.PORT || 3000; //cuando esta en heroku toma el puerto que me asigna pero si esta local me toma el 3000
app.use(express.static(__dirname + '/public')); //asi me lee los archivos de la carpeta ppublc y cualquier persona podria acceder a http://localhost/3000/home.html

//Express HBs
hbs.registerPartials(__dirname + '/views/parciales');//el dirname es para que coja toda la ruta del url no importa que tan larga sea y le concatene ese ruta
app.set('view engine', 'hbs');//handlebars una opcion por si no se quiere usar ninguno framework de frontends


//////////////////////
app.get('/', (req, res) => { //de este modo solamente escucha las peticiones que son asi http://localhost/3000/
    

    res.render('home',{
        nombre:'Anderson'//asi cualquier variable que ponga en el html como {{nombre}} se remplaza por esta variable
        //anio: new Date().getFullYear()
    }); //ais puedo renderizar vistas de los handlebars

});
app.get('/about', (req, res) => { //de este modo solamente escucha las peticiones que son asi http://localhost/3000/
    

    res.render('about'); //ais puedo renderizar vistas de los handlebars

});
app.get('/data', (req, res) => { //de este modo solamente escucha las peticiones que son asi http://localhost/3000/data

    res.send('Salida de cuando coloca slash data, aqui va la informaciond del data '); //despues de que pase por el / despues de la url 


});

app.listen(port, () => {
    console.log("escuchando peticiones en el puerto"+port);
});