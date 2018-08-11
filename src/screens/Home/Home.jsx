import React from "react";

import Title from "../../components/Title";
import FormCities from "../../components/FormCities";
import Current from "../../components/Current";
import Forecast from "../../components/Forecast";
import { Button, Alert , Panel , Grid, Col ,Row , Table , Jumbotron, ControlLabel ,Form  ,  FormControl } from 'react-bootstrap';

class Home extends React.Component {

  constructor(){
      super();
      this.state ={
        cities: [],
        location: [],
        current:  [],
        forecast: [],
        city: null,
        forecastList: []
      };

       this._getWeather = this._getWeather.bind(this);
       this._loadCities = this._loadCities.bind(this);
       this._loadCurrentByCity = this._loadCurrentByCity.bind(this);
       this._loadForecastByCity = this._loadForecastByCity.bind(this);
       this._loadCurrentByPosition = this._loadCurrentByPosition.bind(this);
       this._loadForecasteByPosition = this._loadForecasteByPosition.bind(this);
  }


/*Listado de ciudades */
_loadCities(){
  fetch('/v1/cities')
    .then(res => {
        return res.json();
      })
      .then(cities => {
        this.setState({ cities })
      });
};

/*Obtener datos de ubicacion a partir de la ip_api */
_loadLocation(){
  fetch('/v1/location')
  .then(res => {
    return res.json();
  })
  .then(location => {
      this.setState({ location })
      var lat = location.lat;
      var lon = location.lon;
      this._loadCurrentByPosition(lat,lon);
      this._loadForecasteByPosition(lat,lon);
  });

}
/*Obtener datos de ubicacion a partir de la ip_api */
_loadCurrentByCity(city){
  fetch('/v1/current/'+ city)
     .then(res => {
       return res.json();
     })
     .then(current => {
       this.setState({
            current,
            city :current.name,
            country:current.sys.country,
            weather_main:current.weather[0].main,
            weather_description:current.weather[0].description,
            temperature : current.main.temp - 273
       });

     }).catch (function (error) {
     });
};
/* Obtener el pronostico del Clima de una ciudad*/
_loadForecastByCity(city){
    fetch('/v1/forecast/'+ city)
       .then(res => {
         return res.json();
       })
       .then(forecast => {
         var forecast_result = [];
         var i=0;

         forecast.forEach(function (item) {
             var temp = {id:i,temp:item.main,dt_txt:item.dt_txt,weather:item.weather[0]};
             forecast_result.push(temp);
             i=i+1;
         });


         this.setState({
           forecast: forecast_result
         });
       }).catch (function (error) {
       });
};
/* Obtener Clima Actual con las coordenadas Latitud/Longitud de ip_api*/
_loadCurrentByPosition(lat,lon){
  fetch('/v1/current/'+lat+'/'+lon)
    .then(res => {
      return res.json();
    })
    .then(current => {
         this.setState({
         current,
         city :current.name,
         country:current.sys.country,
         weather_main:current.weather[0].main,
         weather_description:current.weather[0].description,
         temperature : current.main.temp - 273
       });

    }).catch (function (error) {
    });


};
/* Obtener Pronostico del Clima  con las coordenadas Latitud/Longitud de ip_api*/
_loadForecasteByPosition(lat,lon){
    fetch('/v1/forecast/'+lat+'/'+lon)
      .then(res => {
        return res.json();
      })
      .then(forecast => {
        var forecast_result = [];
        var i=0;
        forecast.forEach(function (item) {
            var temp = {id:i,temp:item.main,dt_txt:item.dt_txt,weather:item.weather[0]};
            forecast_result.push(temp);
            i=i+1;
        });

        this.setState({
          forecast: forecast_result
        });

      }).catch (function (error) {
      });
};

componentDidMount() {
    /*Listado de Ciudades*/
    this._loadCities();
   /*Obtener Ubicacion Actual con ip_api*/
    this._loadLocation();

};

/* Obtener Datos */
_getWeather (event)  {
  var city=event.target.value;
      /*Evitar el Submit*/
      event.preventDefault();

      if(city){
      /*Cargo los datos de la Ciudad Seleccionada en el select*/
        /*Cargar clima actual*/
        this._loadCurrentByCity(city);
        /*Cargar pronostico semanal*/
        this._loadForecastByCity(city);
      }else{
        /*Cargo los datos de la ubicacion ip_api*/
        this._loadLocation();
      }
};
  render() {
    return (
      <Jumbotron>
        <Panel bsStyle="success">
            <Panel.Body>
              {/*Componente para el Tiulo*/}
              <Title />
          {/*Componente para el listado de ciudades*/}
            <FormCities cities ={this.state.cities}  _getWeather={this._getWeather} />

            </Panel.Body>
        </Panel>
        {/*Panel Clima Actual*/}
        <Panel bsStyle="success">
          <Panel.Heading>
            <Panel.Title componentClass="h3">Clima Actual</Panel.Title>
          </Panel.Heading>
          {/*Componente para el clima actual*/}
          <Current
            city = {this.state.city}
            country = {this.state.country}
            weather_main = {this.state.weather_main}
            weather_description = {this.state.weather_description}
            temperature = {this.state.temperature}

          />
        </Panel>
        {/*Pronòstico proximos  5 dìas*/}
        <Panel bsStyle="success">
          <Panel.Heading>
            <Panel.Title componentClass="h3">Pronòstico pròximos 5 dìas</Panel.Title>
          </Panel.Heading>
          {/*Componente para el pronostico del clima*/}
           <Forecast forecast = {this.state.forecast} />
        </Panel>
      </Jumbotron>
    );
  }
};

export default Home;
