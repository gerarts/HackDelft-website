const express = require('express')
const app = express()
const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017')

app.get('/', (req, res) => {
	res.send("Hello World")
})

app.listen(3000, () => {
	console.log('Go to localhost:3000')
})