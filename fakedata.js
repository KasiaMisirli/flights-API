var dataFaker = require("data-faker");
 
dataFaker.set("origin", ["Melbourne", "Sydney", "Perth", "Canberra", "Newcastle", "Brisbane","Adelaide","Gold Coast","Darwin","Hobart"]);
dataFaker.set("destination", ["Melbourne", "Sydney", "Perth", "Canberra", "Newcastle", "Brisbane","Adelaide","Gold Coast","Darwin","Hobart"]);

dataFaker.set("day",[1,30],{range:true, unique: true});
dataFaker.set("month",[1,12],{range:true, unique: true});
dataFaker.set("year",[2019,2019],{range:true, unique: true});
dataFaker.set("price",[69,600], {range: true, unique: true});

var flights = dataFaker.schema([{
    origin: "origin",
    destination: "destination",
    day:"day",
    month: "month",
    year: "year",
    price: "price",
    currency: "AUD"
}, 400]);


console.log(flights)