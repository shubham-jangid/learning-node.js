const request= require('request');

var geocodeAddress=(address)=>{

    var encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCfC8tHeLYOb1QUKPja0yw1-XQegF8AELg`,
        json: true
    },
        (error, response, body) => {
            if (error) {
                console.log("cant connect to internet");
            } else if (body.status === 'ZERO_RESULTS') {
                console.log("invalid address or cannot find the address");
            }
            else if (body.status === "OK") {
                console.log(`address ${body.results[0].formatted_address}`);
                console.log(`latitute ${body.results[0].geometry.location.lat}`);
                console.log(`longitude ${body.results[0].geometry.location.lng}`);
            }
        });
};

module.exports.geocodeAddress=geocodeAddress;