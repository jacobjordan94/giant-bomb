var GiantBomb = require('./giant-bomb');

// Get API key at http://giantbomb.com/api
var gb = new GiantBomb('your-api-key', 'your-user-agent');

var id = 56733
gb.getGame({id: id, fields: ['name', 'deck'], format: 'json'}, function(error, response, body){
	if(!error && response.statusCode == 200) {
		let data = JSON.parse(body);
		console.log(data.results.name);
		console.log(data.results.deck);
	}
})

// Callback based
gb.search({query: 'Persona', format: 'json', fields: ['name'], limit: 10, resources: ['game']}, 
	function(error, response, body){
		if(!error && response.statusCode == 200){
			let data = JSON.parse(body);
			data.results.forEach(game => {
				console.log(game.name);
			});
		}
	}
);

// Promise based
gb.search({query: 'Persona', format: 'json', fields: ['name'], limit: 10, resources: ['game']})
	.then((body) => {
		let data = JSON.parse(body);
		data.results.forEach(game => {
			console.log(game.name);
		});
	})
	.catch((err) => {
		console.log('Promise error');
		console.log(err);
	});

// Promise based + xml format
gb.search({query: 'Persona', format: 'xml', fields: ['name'], limit: 10, resources: ['game']})
	.then((xml) => {
		console.log(xml);
	})
	.catch((err) => {
		console.log('Promise error');
		console.log(err);
	});