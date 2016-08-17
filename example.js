var GiantBomb = require('giant-bomb');

//Get API key at http://giantbomb.com/api
var gb = new GiantBomb('your api key', 'your unique user agent');

gb.search({query: 'Persona', fields: ['name'], limit: 10, resources: ['game']}, 
	function(error, response, body){
		if(!error && response.statusCode == 200){
			body.results.forEach(game => {
				console.log(game.name);
			});
		}
	}
);