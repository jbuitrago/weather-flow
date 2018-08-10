var express = require('express')
var app = express()
var cors = require('cors');

// Routes
var routes_api = require('./routes/weather');

app.use('/v1', routes_api);


app.use(cors());

app.listen(8080, function () {
   console.log('Listening on port 8080!')
})
