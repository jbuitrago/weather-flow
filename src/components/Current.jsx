import React from "react";
import { Button, Alert , Panel , Grid, Col ,Row , Table , Jumbotron, ControlLabel ,Form  ,  FormControl } from 'react-bootstrap';


const Current = props => (
<Panel.Body>
	<h1>{props.city}</h1>
	<h2>{props.country} </h2>
	<h3>{props.weather_main} {props.weather_description}</h3>
<h1>{Math.round(props.temperature * 100) / 100}°C</h1>

	</Panel.Body>

);

export default Current;
