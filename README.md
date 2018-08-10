<H1> Pronostico del tiempo</H1>

<H2>Requerimientos</H2>

	Node v8.11.3
	npm

<H2>Instalacion</H2>

-Clonar el proyecto

git clone https://github.com/jbuitrago/weather-flow2.git

-Ejecutar el comando

npm run dev

<H2>Entregables</H2>

- El comando "npm run dev" levanta el FrontEnd en la ruta http://localhost:3000  y tambien levanta el BackeEnd erl el puerto 8080 pero a traves de WebPack se puede ver el api en la ruta http://localhost:3000/v1

- Se utilizo el Api de clima recomendado "openmapsweather" , el API_KEY se encuentra configurado en el archivo  src/server/weather

<H2>Pasos para el desarrollo del BackEnd</H2>


<H4>1. Se ejecuto el siguiente comando para  crear el package.json file.</H4>

	npm init

<H4>2.Se instalo Webpack.</H4>

	npm install webpack webpack-cli --save-dev

<H4>3. Se instalo react and react-dom.</H4>

	npm install react react-dom --save

<H4>4. Se instalo Babel para transpilar ES6 and JSX to ES5</H4>

Transpilar es generar a partir de código en un lenguaje código en otro lenguaje. Es decir, un programa produce otro programa en otro lenguaje 		cuyo comportamiento es el mismo que el original.

npm install babel-core babel-loader babel-preset-env babel-preset-react --save-dev

	babel-core: Transforms ES6 code to ES5
	babel-loader: Webpack helper to transpile code, given the the preset.
	babel-preset-env: Preset which helps babel to convert ES6, ES7 and ES8 code to ES5.
	babel-preset-react: Preset which Transforms JSX to JavaScript.

<H4>5. Se crearon los archivos</H4>

	/src/index.js  

	/src/index.html


<H4>6. Se creo el archivo webpack.config.js para la configuracion de Webpack y generar el bundle index-bundle.js</H4>


 <H4>7. Webpack Loaders:</H4>

 npm install css-loader style-loader --save-dev



<H4>8. Se creo el archivo</H4>
.babelrc:

Este archivo le dirá a babel qué preajustes usar para transpilar el código.
Aquí estamos usando dos preajustes:

env: 	Este preset se utiliza para transpilar el código ES6 / ES7 / ES8 a ES5.
react: este preset se usa para transpilar el código JSX a ES5.

<H4>9. App.js </H4>

Se creó el archivo App.js para React

<H4>10. Se creo el archivo index.js y index.html</H4>

	import React from "react";
	import ReactDOM from "react-dom";
	import App from "./components/App.js";

	ReactDOM.render(<App />, document.getElementById("root"));


<H4>11. Se instaló el plugin Html-webpack-plugin</H4>



<H4>12. Se configuro el plugin Html-webpack-plugin en el archivo de configuracion  webpack.config.js</H4>




<H4>13. Se instaló webpack-dev-server para que los cambios de codigo se actualicen automaticamente.</H4>


	npm install webpack-dev-server --save-dev


<H4>13.  Se modifico el package.json para agregar el siguiente comando para levantar el server </H4>

	"start": "webpack-dev-server --mode development --open --hot"


<H4>14. Se configuró webpack.config.js para agregar el loader para sass , en este proyecto no se trabajo con sass


{
 test: /\.scss$/,
 use: [“style-loader”, “css-loader”, “sass-loader”]
 }

<H4>14. Se configuro el webpack.config.js para que levante el server</H4>

  devServer: {
    port: 3000,
    open: true,
    proxy: {
      "/v1": "http://localhost:8080"
    }
  },


<H4>15. Se instalo Nodemon para que haga restart al server automaticamente.</H4>

npm install --save-dev nodemon


<H4>16. Se instalo Express para la creacion del api e Node.js
Express is a web application framework for Node.js. It is used to build our backend API’s.

src/server/index.js is the entry point to the server application. Below is the src/server/index.js file

npm install --save express


<H4>17.  Concurrently</H4>
Se instalo Concurrently para ejecutar multiples comandos desde el package.json

npm install concurrently --save



<H2>Pasos para el desarrollo del FrontEnd</H2>

<H4><H4>


Ejemplo

http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=0d155b145b14b78b8c3ba40d0e724bf0


fromElement

npm install --save react-bootstrap

Instalacio

1 - npm install --save request
2-npm run dev




---Test
npm install --save-dev jest babel-jest

npm install --save-dev enzyme enzyme-adapter-react-16 enzyme-to-json
