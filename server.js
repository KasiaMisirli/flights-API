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