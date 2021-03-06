const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7c5588f1c2e638bcd54bd776ef5bbb90&units=metric`)
    return resp.data.main.temp;
}
module.exports = {
    getClima
}