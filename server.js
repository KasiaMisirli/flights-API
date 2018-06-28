const express = require("express")
const cors = require('cors')
var fs = require('fs')

const app = express()

const PORT = 7777

app.listen(PORT,() => {
  console.log(`listening to ${PORT}`)
})    

app.use(cors())
app.get('/flights',(req,res) => {
  var data = JSON.parse(fs.readFileSync('flights.json').toString())
  res.json(data)
})

// var origin = ''
// var destination = ''
// var year = null
// var month = null
// var day = null

app.get(`/flights&origin=:origin&destination=:destination&year=:year&month=:month`,(req,res)=> {
  var origin = req.params.origin;
  var destination = req.params.destination;
  var year = Number(req.params.year)
  var month = Number(req.params.month)
  var data = JSON.parse(fs.readFileSync('flights.json').toString())
  var flightsFound = []
  var possibleFlights = []
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
  res.json(possibleFlights)
})
