import React from "react";
import { Panel, Table } from 'react-bootstrap';

const Forecast = props => (
	<Panel.Body>

		<Table responsive>
		<thead>
			<tr>
				<th>Fecha</th>
				<th>Temperatura</th>
				<th>Minima</th>
				<th>Maxima</th>
			  <th>Clima</th>
			</tr>
		</thead>
		<tbody>
			{props.forecast.map(function (item) {
				return (
					<tr key={item.id}>
						<td>{item.dt_txt}</td>
						<td>{(Math.round((item.temp.temp-273) * 100) / 100)}°C</td>
						<td>{(Math.round((item.temp.temp_min-273)* 100) / 100)}°C</td>
						<td>{(Math.round((item.temp.temp_max-273) * 100) / 100)}°C</td>
				  	<td>{item.weather.main}-{item.weather.description} </td>
					</tr>
				);
			})}

		</tbody>
	</Table>
</Panel.Body>

);

export default Forecast;
