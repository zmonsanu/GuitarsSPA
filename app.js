const express = require('express')
const http = require('http')
const path = require('path')


const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 5000!')
})
