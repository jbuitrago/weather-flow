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
Se desarrollo en backend y el FrontEnd
Se creo la cuenta en openmapsweather con el Api que se encuentra en src/server/weather

<H2>Pasos para el desarrollo del BackEnd</H2>
1 - Para crear el package.json file.

	npm init

2- Webpack

	npm install webpack webpack-cli --save-dev

3- Se instalo react and react-dom

	npm install react react-dom --save

4- Se Instalo Babel para transpilar ES6 and JSX to ES5

		Transpilar es generar a partir de código en un lenguaje código en otro lenguaje. Es decir, un programa produce otro programa en otro lenguaje 		cuyo comportamiento es el mismo que el original.

	npm install babel-core babel-loader babel-preset-env babel-preset-react --save-dev

	babel-core: Transforms ES6 code to ES5
	babel-loader: Webpack helper to transpile code, given the the preset.
	babel-preset-env: Preset which helps babel to convert ES6, ES7 and ES8 code to ES5.
	babel-preset-react: Preset which Transforms JSX to JavaScript.

5 . Se crearon los archivos
	/src/index.js  
	/src/index.html


6  crear webpack.config.js

	const path = require("path");

	module.exports = {
	  entry: "./src/index.js",
	  output: {
	    path: path.join(__dirname, "/dist"),
	    filename: "index_bundle.js"
	  }
	};

	In the above code, Webpack will bundle all of our JavaScript files into index-bundle.js file inside the /dist directory.


 7- Webpack Loaders:

	Here babel-loader is used to load our JSX/JavaScript files and css-loader is used to load and bundle all of the CSS files into one file and 	 style-loader will add all of the styles inside the style tag of the document.

	 Before Webpack can use css-loader and style-loader we have to install them as a dev-dependency.


	npm install css-loader style-loader --save-dev


8-
.babelrc:
Now create a .babelrc file inside root of the project directory with the following contents inside of it.



This file will tell babel which presets to use for transpiling the code.Here we are using two presets:

env: This preset is used to transpile the ES6/ES7/ES8 code to ES5.
react: This preset is used to transpile JSX code to ES5.




9  - compilar para dev  


	npm start

After executing the above command you will see index_bundle.js file created under the /dist directory which will contain transpiled ES5 code from index.js file.




10 -  App.js
	Create an App.js file inside the components folder of the src folder with the following contents inside of it.


11- App.css:
	Create an App.css file inside the styles folder of the src folder with the following contents inside of it.


12-
	Now modify the index.js file that we created earlier to contain following lines of code.


	import React from "react";
	import ReactDOM from "react-dom";
	import App from "./components/App.js";

	ReactDOM.render(<App />, document.getElementById("root"));


13 . Installing Html-webpack-plugin:
	Now we also need to install html-webpack-plugin, this plugin generates an HTML file, injects the script inside the HTML file and writes this 	file to dist/index.html.

	Install the html-webpack-plugin as a dev-dependency:



14  
	Now we need to configure this plugin inside the webpack.config.js file, add the following lines of code inside it.


15. compilar de nuevo

	npm start

You will get output inside the /dist folder of project, Now open the index.html in a web browser, you will see the text “My React App!” inside of it.

16-  But this approach has a downside that you have to manually refresh the webpage, in order to see the changes you have made. To have webpack watch 	our changes and refresh webpage whenever any change is made to our components, we can install webpack-dev-server.


	Installing Webpack-dev-server:
	Install webpack-dev-server as a dev-dependency

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
