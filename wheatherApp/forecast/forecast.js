const request=require('request');

var wheatherForecast=()=>{
    request({ url: 'https://api.darksky.net/forecast/6f87a78dcf8ae768283a696621959cd5/28.5927524,77.0924196', json: true },
        (error, response, body) => {
            console.log(`body= ${JSON.stringify(body.currently)}`);
        });
};

module.exports.wheatherForecast=wheatherForecast;