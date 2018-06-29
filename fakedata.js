var dataFaker = require("data-faker");
var fs = require('fs');
 
dataFaker.set("origin", ["Melbourne", "Sydney", "Perth", "Canberra", "Newcastle", "Brisbane","Adelaide","Gold Coast","Darwin","Hobart"]);
dataFaker.set("destination", ["Melbourne", "Sydney", "Perth", "Canberra", "Newcastle", "Brisbane","Adelaide","Gold Coast","Darwin","Hobart"]);

dataFaker.set("day",[1,30],{range:true, unique: true});
dataFaker.set("month",[7,12],{range:true, unique: true});
dataFaker.set("year",[2018,2018],{range:true, unique: true});
dataFaker.set("price",[69,600], {range: true, unique: true});
dataFaker.set("hour",[00,23],{range:true, unique: true});
dataFaker.set("minute",[00,59],{range:true, unique: true});

var flights = dataFaker.schema([{
    origin: "origin",
    destination: "destination",
    day:"day",
    month: "month",
    year: "year",
    price: "price",
    currency: "AUD",
    hour: "hour",
    minute: "minute"
}, 10000]);


console.log(flights)
//after the data is created by the data faker, its being saved in the json file
fs.writeFile('flight-data.json', JSON.stringify(flights,null,4));