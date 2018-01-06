
const geocode=require('./geocode/geocode.js')
const forecast=require('./forecast/forecast.js');
const yargs =require('yargs');
const argv=yargs.option({
    a:{
       demand:true, 
       alias:'address',
       describe:'address to fatch for wheather',
       string:true
    }
})
.help()
.alias('help','h')
.argv;


//geocode.geocodeAddress(argv.address);
forecast.wheatherForecast();


