var express = require('express')
var app = express()


// Routes
var routes_api = require('./routes/weather');

app.use('/api', routes_api);


/*app.get('/', function (req, res) {
   res.send('Hello World!')
})

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/location', (req, res) => {
  res.send({ express: 'Hello From Express' });
});*/



app.listen(8080, function () {
   console.log('Listening on port 8080!')
})
