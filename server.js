const express = require("express")
const cors = require('cors')
var fs = require('fs')

const app = express()

const PORT = 7777
//setting up the server
app.listen(PORT,() => {
  console.log(`listening to ${PORT}`)
})    
//CORS: cross origin resource sharing, tells browser to allow access to resources at different origin/domain 
app.use(cors())
//reading file with data

var data = JSON.parse(fs.readFileSync('flight-data.json').toString())//turned into global variable

app.get('/flights',(req,res) => {
  res.json(data)
})
//setting up the api response with the expected data
app.get(`/flights&origin=:origin&destination=:destination&year=:year&month=:month&day=:day`,(req,res)=> {
  var origin = req.params.origin;
  var destination = req.params.destination;
  var year = Number(req.params.year)
  var month = Number(req.params.month)
  var day = Number(req.params.day)

  var bestFlight = []
 
   for(var flight in data){
    if(data[flight]["origin"] == origin && data[flight]["destination"] == destination && data[flight]   ["year"] == year && data[flight]["month"] == month && data[flight]["day"] > day){
      bestFlight.push(data[flight])
    }
  }

  var byDate = bestFlight.slice(0);
  byDate.sort(function(a,b) {
    return a.day - b.day;
  });
res.json(byDate[0])
})
