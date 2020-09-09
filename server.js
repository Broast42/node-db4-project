const express = require('express')

const recipiesRouter = require('./recipies/recipies_router')

const server = express()

server.use(express.json())
server.use("/api", recipiesRouter)

//default error
server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server