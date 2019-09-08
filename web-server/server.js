const express = require('express'); //importo exprss de node modules
const app = express(); //para poder usar expres
const port = 3000;

app.use(express.static(__dirname + '/public')); //asi me lee los archivos de la carpeta ppublc y cualquier persona podria acceder a http://localhost/3000/home.html

//Express HBs
app.set('view engine', 'hbs');
//////////////////////
/*pp.get('/', (req, res) => { //de este modo solamente escucha las peticiones que son asi http://localhost/3000/
    //res.send('Hello World!'); //despues de que pase por el / despues de la url 
    let salida = {
        nombre: 'Anderson',
        edad: 19,
        url: req.url
    }
    res.send(salida); // express en la funcion de send ya serializa si detecta un json

});*/
app.get('/data', (req, res) => { //de este modo solamente escucha las peticiones que son asi http://localhost/3000/data

    res.send('Salida de cuando coloca slash data, aqui va la informaciond del data '); //despues de que pase por el / despues de la url 


});

app.listen(3000, () => {
    console.log("escuchando peticiones en el puerto", 3000);
});