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


<H3>1. Se ejecuto el siguiente comando para  crear el package.json file.</H3>

	npm init

<H3>2.Se instalo Webpack.</H3>

	npm install webpack webpack-cli --save-dev

<H3>3. Se instalo react and react-dom.</H3>

	npm install react react-dom --save

<H3>4. Se instalo Babel para transpilar ES6 and JSX to ES5</H3>

Transpilar es generar a partir de código en un lenguaje código en otro lenguaje. Es decir, un programa produce otro programa en otro lenguaje 		cuyo comportamiento es el mismo que el original.

npm install babel-core babel-loader babel-preset-env babel-preset-react --save-dev

	babel-core: Transforms ES6 code to ES5
	babel-loader: Webpack helper to transpile code, given the the preset.
	babel-preset-env: Preset which helps babel to convert ES6, ES7 and ES8 code to ES5.
	babel-preset-react: Preset which Transforms JSX to JavaScript.

<H3>5. Se crearon los archivos</H3>

	/src/index.js  

	/src/index.html


<H3>6. Se creo el archivo webpack.config.js para la configuracion de Webpack y generar el bundle index-bundle.js</H3>


 <H3>7. Webpack Loaders:</H3>

 npm install css-loader style-loader --save-dev



<H3>8. Se creo el archivo</H3>
.babelrc:

Este archivo le dirá a babel qué preajustes usar para transpilar el código.
Aquí estamos usando dos preajustes:

env: 	Este preset se utiliza para transpilar el código ES6 / ES7 / ES8 a ES5.
react: este preset se usa para transpilar el código JSX a ES5.

<H3>9. App.js </H3>

Se creó el archivo App.js para React

<H3>10. Se creo el archivo index.js y index.html</H3>

	import React from "react";
	import ReactDOM from "react-dom";
	import App from "./components/App.js";

	ReactDOM.render(<App />, document.getElementById("root"));


<H3>11. Se instaló el plugin Html-webpack-plugin</H3>



<H3>12. Se configuro el plugin Html-webpack-plugin en el archivo de configuracion  webpack.config.js</H3>




<H3>13. Se instaló webpack-dev-server para que los cambios de codigo se actualicen automaticamente.</H3>


	npm install webpack-dev-server --save-dev


<H3>13.  Se modifico el package.json para agregar el siguiente comando para levantar el server

	"start": "webpack-dev-server --mode development --open --hot"


18- Se configuro webpack.config.js para agregar el loader para sass , en este proyecto no se trabajo con sass

webpack.config.js change the following section
{
 test: /\.scss$/,
 use: [“style-loader”, “css-loader”, “sass-loader”]
 }


19 - rename css to scss







20- webpack.config.js change the following section
Webpack dev server
Webpack dev server is used along with webpack. It provides a development server that provides live reloading for the client side code. This should be used for development only.

The devServer section of webpack.config.js contains the configuration required to run webpack-dev-server which is given below.




,
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      "/api": "http://localhost:8080"
    }
  },


21 - Nodemon
Nodemon is a utility that will monitor for any changes in the server source code and it automatically restart the server. This is used in development only.

nodemon.json file is used to describe the configurations for Nodemon. Below is the nodemon.json file which I am using.

npm install --save-dev nodemon


22 -  Express
Express is a web application framework for Node.js. It is used to build our backend API’s.

src/server/index.js is the entry point to the server application. Below is the src/server/index.js file

npm install --save express


23 Concurrently
Concurrently is used to run multiple commands concurrently. I am using it to run the webpack dev server and the backend node server concurrently in the development environment. Below are the npm/yarn script commands used.

npm install concurrently --save




	/*guarfar esto*/

    "start": "webpack-dev-server --mode development --open --hot",
    "build": "webpack --mode production",


--------------------------------------------------------------------------


API KEY https://home.openweathermap.org/api_keys

 0d155b145b14b78b8c3ba40d0e724bf0


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
