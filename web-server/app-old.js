const http = require('http');
/*Version de la vieja escuela sin express con sintaxis dificil de usar */
/*
http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'aplication/json' });

        let salida = {
            nombre: 'Anderson',
            edad: 19,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();


    })
    .listen(8080);

console.log("Escuchando el 8080");*/
/**/