<H1> Pronóstico del tiempo</H1>

<H2>Requerimientos</H2>

	Node v8.11.3
	npm

 <H2>Instalación</H2>

-Clonar el proyecto

git clone https://github.com/jbuitrago/weather-flow2.git

-Ingresar al directorio

cd weather-flow2

-Instalar las dependencias

npm install

-Para levantar la aplicación se debe ejecutar el comando

npm run dev

-También se puede levantar el server

npm run server

-También se puede levantar el cliente

npm run client

<H2>Entregables</H2>

<H3>BackEnd</H3>

Se creó el backend con node y express con el script src\server\index.js con las siguientes rutas definidas en el script src\server\routes\weather.js:

- http://localhost:3000/v1  
- http://localhost:3000/v1/cities  (Listado de ciudades)
- http://localhost:3000/v1/location (Ubicacion actual obtenida desde http://ip-api.com/json)
- http://localhost:3000/v1/current/:city ( Estado actual del clima de una ciudad)
- http://localhost:3000/v1/current/:lat/:lon  ( Estado actual del clima de una coordenada)
- http://localhost:3000/v1/forecast/:city  (Pronóstico del clima de los próximos 5 días de una ciudad)
- http://localhost:3000/v1/current/:lat/:lon  (Pronóstico del clima de los próximos 5 días de una coordenada)

Decidi hacer 2 rutas separadas de current y forecast por ciudad o por coordenadas para que se pudieran acceder separadamente, tambien se podia hacerlo en una sola ruta, esta fue mi solucion.

- El comando "npm run dev" levanta el FrontEnd en la ruta http://localhost:3000  y tambien levanta el BackeEnd en el puerto 8080 pero a través de WebPack se puede ver el api en la ruta http://localhost:3000/v1

- Se utilizó el Api de clima recomendado "openmapsweather" , el API_KEY se encuentra configurado en el archivo  src/server/weather

-No se hizo ningún test

<H3>FrontEnd</H3>

Cuando se ejecuta el comando “npm run dev” levanta la aplicación en la ruta http://localhost:3000

Inicialmente busca la ubicación actual a través de ip_api y le envía las coordenadas obtenidas al componente que muestra el “clima  actual” y tambien le envia las cordenadas al componente “Pronostico proximos 5 dias”

Tambien se puede observar que hay un desplegable de ciudades que ya se explico en el punto anterior de donde salen, estas ciudades ya tienen los codigos originales, cuando selecciona alguna ciudad hace el mismo proceso anterior, pero esta vez no envia las coordenadas sino directamente el id de la ciudad al componente de “clima  actual”  y despues al componente de “Pronostico proximos 5 dias” , la parte tecnica se detalla al final de este documento en el Proceso de desarrollo del Front End.

No hice casos de Test por tiempos, pero deje la definición en el directorio src/_test

Quise hacer la aplicacion completa ya que tengo conocimientos también con Backend para este tipo de configuraciones.

<H2>Proceso para el desarrollo del BackEnd</H2>


<H4>1. Se ejecutó el siguiente comando para  crear el package.json file.</H4>

	npm init

<H4>2.Se instalo Webpack.</H4>

	npm install webpack webpack-cli --save-dev

<H4>3. Se instaló react and react-dom.</H4>

	npm install react react-dom --save

<H4>4. Se instaló Babel para transpilar ES6 and JSX to ES5</H4>

Transpilar es generar a partir de código en un lenguaje código en otro lenguaje. Es decir, un programa produce otro programa en otro lenguaje 		cuyo comportamiento es el mismo que el original.

npm install babel-core babel-loader babel-preset-env babel-preset-react --save-dev

	babel-core: Transforms ES6 code to ES5
	babel-loader: Webpack helper to transpile code, given the the preset.
	babel-preset-env: Preset which helps babel to convert ES6, ES7 and ES8 code to ES5.
	babel-preset-react: Preset which Transforms JSX to JavaScript.

<H4>5. Se crearon los archivos</H4>

	/src/index.js  

	/src/index.html


<H4>6. Se creó el archivo webpack.config.js para la configuración de Webpack y generar el bundle index-bundle.js</H4>


 <H4>7. Webpack Loaders:</H4>

 npm install css-loader style-loader --save-dev



<H4>8. Se creó el archivo</H4>
.babelrc:

Este archivo le dirá a babel qué preajustes usar para transpilar el código.
Aquí estamos usando dos preajustes:

env: 	Este preset se utiliza para transpilar el código ES6 / ES7 / ES8 a ES5.
react: este preset se usa para transpilar el código JSX a ES5.

<H4>9. App.js </H4>

Se creó el archivo App.js para React

<H4>10. Se creó el archivo index.js y index.html</H4>

	import React from "react";
	import ReactDOM from "react-dom";
	import App from "./components/App.js";

	ReactDOM.render(<App />, document.getElementById("root"));


<H4>11. Se instaló el plugin Html-webpack-plugin</H4>



<H4>12. Se configuró el plugin Html-webpack-plugin en el archivo de configuración  webpack.config.js</H4>




<H4>13. Se instaló webpack-dev-server para que los cambios de codigo se actualicen automaticamente.</H4>


	npm install webpack-dev-server --save-dev


<H4>13.  Se modificó el package.json para agregar el siguiente comando para levantar el server </H4>

	"start": "webpack-dev-server --mode development --open --hot"


<H4>14. Se configuró webpack.config.js para agregar el loader para sass , en este proyecto no se trabajo con sass


{
 test: /\.scss$/,
 use: [“style-loader”, “css-loader”, “sass-loader”]
 }

<H4>14. Se configuró el webpack.config.js para que levante el server</H4>

  devServer: {
    port: 3000,
    open: true,
    proxy: {
      "/v1": "http://localhost:8080"
    }
  },


<H4>15. Se instaló Nodemon para que haga restart al server automáticamente.</H4>

npm install --save-dev nodemon


<H4>16. Se instalo Express para la creación del api e Node.js
Express is a web application framework for Node.js. It is used to build our backend API’s.

src/server/index.js is the entry point to the server application. Below is the src/server/index.js file

npm install --save express


<H4>17.  Concurrently</H4>
Se instalo Concurrently para ejecutar múltiples comandos desde el package.json

npm install concurrently --save


<H2>Pasos para el desarrollo del FrontEnd</H2>

<H4>1.Se instalo la de dependencia para trabajar el diseño del sitio con Bootstrap<H4>

	npm install --save react-bootstrap

<H4>2.Se crearon los siguientes componentes<H4>


-src\screens\Home\Home.jsx

Esta página principal contiene los demás componentes descritos a continuación.

Se encarga de mostrar inicialmente un desplegable de ciudades obtenidas accediendo al api de /cities , también obtiene  el clima actual accediendo al api /current  y el pronostico de los 5 dias accediendo al api /forecast enviandole las coordenadas de latitud y longitud obtenidas accediendo al api /location

-src\components\Title.jsx

Este componente es muy básico ya que solamente muestra el Tìtulo Principal

-src\components\FormCities.jsx

Este componente muestra el desplegable de ciudades mediando las props que le envia el contenedor Home, cuando se selecciona una ciudad, llama a una función que se encuentra en home llamada getWeather la cual se encarga de obtener el clima actual del api /current y el l pronóstico de los 5 días accediendo al api /forecast  pero esta vez envia la ciudad seleccionada.

-src\components\Current.jsx

Como se describió anteriormente este componente se encarga de mostrar el clima actual a través de las props que le envía el contenedor Home.

-src\components\Forecast.jsx

Como se describió anteriormente este componente se encarga de mostrar tabla de pronóstico a través de las props que le envía el contenedor Home.
