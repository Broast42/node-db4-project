const express = require('express')

//add route inport

const server = express()

server.use(express.json())
//add route handeler

module.exports = server