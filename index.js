var express = require('express')
var server = express()
var eddy = require('./name.json')

server.get('/', function(request, response) {
  response.send("test, test, test")
})

server.get('/eddy', function (request, response) {
  response.json(eddy)
})

server.get('*', function (request, response) {
  response.status(404)
  response.send("under construction")
})

server.listen(8080)

//why it doesn't work with the 3000 port?