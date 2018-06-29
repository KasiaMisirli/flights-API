const express = require("express")
const cors = require('cors')
var fs = require('fs')

const app = express()

const PORT = 7777
//setting up the server
app.listen(PORT,() => {
  console.log(`listening to ${PORT}`)
})    

app.use(cors())
//reading file with data
app.get('/flights',(req,res) => {
  var data = JSON.parse(fs.readFileSync('flight-data.json').toString())
  res.json(data)
})
//setting up the api response with the expected data
app.get(`/flights&origin=:origin&destination=:destination&year=:year&month=:month&day=:day`,(req,res)=> {
  var origin = req.params.origin;
  var destination = req.params.destination;
  var year = Number(req.params.year)
  var month = Number(req.params.month)
  var day = Number(req.params.day)
  var data = JSON.parse(fs.readFileSync('flight-data.json').toString())
  var flightsFound = []
  var possibleFlights = []
  var bestFlights = []
  //filtering he data and getting to a closest match
  for(var flight in data){
    if(data[flight]["origin"] == origin && data[flight]["destination"] == destination){
       flightsFound.push(data[flight])
    }
  }
  for(var a in flightsFound){
    if(flightsFound[a]["year"] == year && flightsFound[a]["month"] == month){
      possibleFlights.push(flightsFound[a])
    }
  }
  for(var b in possibleFlights){
    if(possibleFlights[b]["day"] > day){
      bestFlights.push(possibleFlights[b])
    }
  } 
  var byDate = bestFlights.slice(0);
  byDate.sort(function(a,b) {
    return a.day - b.day;
  });
res.json(byDate[0])
})
