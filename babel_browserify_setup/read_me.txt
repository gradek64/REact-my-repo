
	1) To run react you dont need server, all you need is code 
	compiler as babel and modular converter as browserify:

	in this example we used : babel and browserify;

	Setup: 
	 1) install babel npm pacakages as:
	    babel-cli (to run babel in command line)
	 2) install babel presets for transpiling to right format 
		npm i babel-preset-env -S 
		npm i babel-preset-react -S
	3) add that to your package.json or make .babelrc file

		  --------------- package.json part---------------

		"babel": {
		    "presets": [
		      "env", "react"
		    ]
		}
		--------------------------------------------------
	4) run bubel for folder scripts

		./node_modules/.bin/babel  ./scripts --experimental --source-maps-inline -d ./lib

	5) run browserfy to convert node modules to browser format 

		./node_modules/.bin/browserify lib/main.js -o bundle.js

	6) points 4 and 5 can be shorthanded in package json scripts tags for speeding


	"scripts": {
    		"babelMe": "babel  ./scripts --experimental --source-maps-inline -d ./lib",
    		"browserifyMe": "browserify lib/main.js -o bundle.js"
  		},
				     
