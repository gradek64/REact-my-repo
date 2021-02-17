1) To run react you dont need server, all you need is code 
	compiler as babel and modular converter as webpack:

	in this example we used : babel and webpack;

	IMPORTANT!
	******************************

	cause we use webpack that depend on external dependency which is 
	babel-loader U need to use babel-loader version that is compatible with the version of the webpack (the best is too find working github project)

	************************

	Setup: 

	1) Install all dependenciese set in the package.json 

	2) notice that babel presets are now set in the webpack.config.js 

	3) run webpack to convert node modules to browser format 

		./node_modules/.bin/webpack

	4) or by setting npm run script name;

	"scripts": {
    		"webpackMme": "webpack"
  		},
			