const fs = require('fs');

crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base}, no esu n numero`);
        }
        let data = '';
        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}`, data, (err) => { //asi creo archivos de texto
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = { //estas funciones se pueden uasr en toda la app
    crearArchivo
}