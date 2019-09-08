const axios = require('axios');


const getLugarLatLng = async(dir) => {
    const encodeURL = encodeURI(dir); //para escapar la direccion, y cambiar espacios por caracteres legibles

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        timeout: 1000,
        headers: { "x-rapidapi-key": "21811a36a0msh0e6d4c3cd275312p1b4afcjsn168eaf8f74ad" }
    });
    /*
    instance.get()
        .then(res => {
            console.log(res.data.Results[0]);
        })
        .catch(err => {
            console.log(err);
        });
    */
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No Hay resultados para ${direccion}`);
    }
    const data = resp.data.Results[0]; //lo saco de aca por que asi es la respuesta que me devuelve el api 
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}