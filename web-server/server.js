const express = require('express'); //importo exprss de node modules
const app = express(); //para poder usar expres
const port = 3000;

app.use(express.static(__dirname + '/public')); //asi me lee los archivos de la carpeta ppublc y cualquier persona podria acceder a http://localhost/3000/home.html

//Express HBs
app.set('view engine', 'hbs');//handlebars una opcion por si no se quiere usar ninguno framework de frontends
//////////////////////
app.get('/', (req, res) => { //de este modo solamente escucha las peticiones que son asi http://localhost/3000/
    

    res.render('home',{
        nombre:'Anderson', //asi cualquier variable que ponga en el html como {{nombre}} se remplaza por esta variable
        anio: new Date().getFullYear()
    }); //ais puedo renderizar vistas de los handlebars

});
app.get('/data', (req, res) => { //de este modo solamente escucha las peticiones que son asi http://localhost/3000/data

    res.send('Salida de cuando coloca slash data, aqui va la informaciond del data '); //despues de que pase por el / despues de la url 


});

app.listen(3000, () => {
    console.log("escuchando peticiones en el puerto", 3000);
});