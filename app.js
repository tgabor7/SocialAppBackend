const express = require('express')
const http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connection.close()
mongoose.connect(process.env.MONGOPATH, {useNewUrlParser: true}).catch(error => console.log(error))

var app = express()

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 4000

app.set('port', port)


var server = http.createServer(app)

server.listen(port, ()=>{
    console.log('App listening on port 4000')
})