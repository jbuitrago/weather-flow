var express = require('express');
var router = express.Router();
var request = require('request');

const apiToken = '0d155b145b14b78b8c3ba40d0e724bf0';
const apiUrl = 'http://api.openweathermap.org/data/2.5';
const ipApi = 'http://ip-api.com/json';


/*Listado de Ciudades*/
router.get('/cities', (req, res) => {
  var citiesList = require('./citi.list.json');
  res.send(citiesList);

});

/*Buscar id de ciudad dada una  ip_id*/
router.get('/location', (req, res) => {
    request.get(ipApi, (error, response, body) => {
      if(error) {
          return console.dir(error);
      }
      res.send(JSON.parse(body));
    });

  });
  /*Pronostico del Estado del tiempo a 5 dias por coordenadas*/
  router.get('/forecast/:lat/:lon', (req, res) => {
      var lat = req.params.lat;
      var lon = req.params.lon;
      request.get(apiUrl + "/forecast?lat="+lat+"&lon="+lon+"&APPID="+apiToken, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        var forecast = JSON.parse(body);
        var forecastlist =   forecast.list.slice(0, 29);
        res.send(forecastlist);
      });

    });
  /*Pronostico del Estado del tiempo a 5 dias por ciudad*/
  router.get('/forecast/:city', (req, res) => {
      var city = req.params.city;
      request.get(apiUrl + "/forecast?id="+city+"&APPID="+apiToken, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        var forecast = JSON.parse(body);
        var forecastlist =   forecast.list.slice(0, 29);
        res.send(forecastlist);
      });

    });

    /*Estado del tiempo actual por coordenadas*/
    router.get('/current/:lat/:lon', (req, res) => {
        var lat = req.params.lat;
        var lon = req.params.lon;

          request.get(apiUrl + "/weather?lat="+lat+"&lon="+lon+"&APPID="+apiToken, (error, response, body) => {
          if(error) {
              return console.dir(error);
          }
          res.send(JSON.parse(body));
        });

      });
      /*Estado del tiempo actual por Ciudad*/
      router.get('/current/:city', (req, res) => {
          var city = req.params.city;

          request.get(apiUrl + "/weather?id="+city+"&APPID="+apiToken, (error, response, body) => {
            if(error) {
                return console.dir(error);
            }
            res.send(JSON.parse(body));
          });

        });



module.exports = router;
