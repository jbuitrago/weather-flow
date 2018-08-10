import React from "react";
import { Button, Alert , Panel , Grid, Col ,Row , Table , Jumbotron, ControlLabel ,Form  ,  FormControl } from 'react-bootstrap';


const FormCities = props => (


  <Form>
    <ControlLabel></ControlLabel>
    <FormControl componentClass="select" placeholder="select" onChange={props._getWeather}>
      <option value="" >Por favor seleccione una ciudad</option>
      {props.cities.map(function (city) {
        return (
      <option value={city.id} key={city.id}>{city.name}</option>
      );
    })}
    </FormControl>
  </Form>

);

export default FormCities;
