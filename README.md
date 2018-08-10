<H1> Pronostico del tiempo</H1>

<H2>Requerimientos</H2>

	Node v8.11.3
	npm

<H2>Instalacion</H2>

-Clonar el proyecto

git clone https://github.com/jbuitrago/weather-flow2.git

-Ejecutar el comando

npm run dev

<H2>Consideraciones</H2>
Se desarrollo el backEnd y el FrontEnd
Se creo la cuenta en openmapsweather con el Api que se encuentra en src/server/weather

<H2>Pasos para el desarrollo del BackEnd</H2>
1 - Para crear el package.json file.

	npm init

2- Webpack

	npm install webpack webpack-cli --save-dev

3- Se instalo react and react-dom

	npm install react react-dom --save

4- Se instalo Babel para transpilar ES6 and JSX to ES5

		Transpilar es generar a partir de código en un lenguaje código en otro lenguaje. Es decir, un programa produce otro programa en otro lenguaje 		cuyo comportamiento es el mismo que el original.

	npm install babel-core babel-loader babel-preset-env babel-preset-react --save-dev

	babel-core: Transforms ES6 code to ES5
	babel-loader: Webpack helper to transpile code, given the the preset.
	babel-preset-env: Preset which helps babel to convert ES6, ES7 and ES8 code to ES5.
	babel-preset-react: Preset which Transforms JSX to JavaScript.

5 . Se crearon los archivos

	/src/index.js  

	/src/index.html


6 -  Se creo el archivo webpack.config.js para la configuracion de Webpack y generar el bundle index-bundle.js


 7- Webpack Loaders:

 npm install css-loader style-loader --save-dev



8- Se creo el archivo
.babelrc:

Este archivo le dirá a babel qué preajustes usar para transpilar el código.
Aquí estamos usando dos preajustes:

env: 	Este preset se utiliza para transpilar el código ES6 / ES7 / ES8 a ES5.
react: este preset se usa para transpilar el código JSX a ES5.


9 -  App.js

Se creó el archivo App.js para React

10- Se creo el archivo index.js y index.html

	import React from "react";
	import ReactDOM from "react-dom";
	import App from "./components/App.js";

	ReactDOM.render(<App />, document.getElementById("root"));


11 . Se instaló el plugin Html-webpack-plugin



12 - Se configuro el plugin Html-webpack-plugin en el archivo de configuracion  webpack.config.js



16-  Se instaló webpack-dev-server para que los cambios de codigo se actualicen automaticamente.


	npm install webpack-dev-server --save-dev


17  Change the package.json start script like below:

"start": "webpack-dev-server --mode development --open --hot"

I have added two flags --open and --hot which opens and refreshes the web page whenever any change is made to components.

Now run the below command in the terminal:

npm start


18 SASS loader

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
