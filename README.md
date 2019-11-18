# Giant Bomb API Wrapper 
A Giant Bomb API Wrapper written for NodeJS. Easily pull information on games, franchises, platforms, etc. from the largest video game database on the internet.

## Installation (Requires Node v6 or higher)
`npm install giant-bomb`

## Setup 
```javascript
var GiantBomb = require('giant-bomb');
var gb = new GiantBomb('your api key', 'unique user-agent');
```


### User-Agent? 
YES! You now MUST provide a unique User-Agent. This changed sometime during summer 2016 and broke a lot of code. 

This User-Agent can be whatever you want, but it should at least relate to your application: 

Good User-Agents: 
- '@GameAnHour - Twitter Bot - Runs a few requests every hour'
- 'Bot for Giant Bomb Unarchived to catch live shows. Runs a single request every 5 minutes.'

Bad User-Agents: 
- 'MozillaFirefox/1.0'
- 'totally unique'

***You get the idea.***

## Before Using ##
Have a basic understanding of the Giant Bomb API
http://www.giantbomb.com/api/documentation

## What's new in 2.0? ##
### New ###
- Callbacks are now optional, every function will return a promise (See examples in this README, as documentation is not up to date)
- Support for XML format (Must specify, defaults to JSON)
- Add support for these endpoints (get-all-saved-times, save-time, get-saved-time, current-live)
### Breaking Changes from v1.3 ###
- Body will now always be returned as a string, you must parse the string as JSON yourself if using the JSON format
### Planned updates ###
- Update project wiki with up-to-date documentation

## Getting a resource by ID

If you know the ID of the resource, you should use the appropriate function: 

```javascript
var id = 56733; // Super Mario Odyssey

// Promise (New in 2.0)
gb.getGame({id: id, fields: ['name', 'deck'], format: 'json'}).then((body) => {
	let data = JSON.parse(body);
	console.log(data.results.name);
	console.log(data.results.deck);
}).catch(err => {
	console.log(err.error);
	console.log(err.response);
	console.log(err.body);
});

// Callback
gb.getGame({id: id, fields: ['name', 'deck'], format: 'json'}, function(error, response, body){
	if(!error && response.statusCode == 200) {
		let data = JSON.parse(body);
		console.log(data.results.name);
		console.log(data.results.deck);
	}
})
```
Outputs: 
```
"Super Mario Odyssey"
"Nintendo's favorite plumber and his new hat-shaped companion travel far beyond the Mushroom Kingdom in this Switch-exclusive 3D platformer."
```

## Documentation 
Note: This readme is not a substitution for actual documentation. 

Please read over the documentation at https://github.com/jacobjordan94/giant-bomb/wiki
(TODO: Update documentation for 2.0)

## Searching for a resource
You can test the following code at https://tonicdev.com/npm/giant-bomb 

**(Remember to change Node version to >v6 and put in your own API key)**
```javascript
var GiantBomb = require('giant-bomb');

//Get API key at http://giantbomb.com/api
var gb = new GiantBomb('your api key', 'your unique user agent');

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
```
This code will log the name of the first ten search results for the query 'Persona' to the console: 
```
"Revelations: Persona"
"Persona 5"
"Persona 4: Arena Ultimax"
"Persona 4 Golden"
"Persona 4 Arena"
"Shin Megami Tensei: Persona 3"
"Shin Megami Tensei: Persona 3 FES"
"Shin Megami Tensei: Persona 3 Portable"
"Persona 4 The Card Battle"
"Persona Q: Shadow of the Labyrinth"
```

### The options parameter
This is one of the arguments passed when using any of the methods.

You can make it very detailed: 
```javascript
var options = {
  query: 'Metal Gear Solid',
  resources: ['game', 'video', 'franchise'],
  offset: 10,
  limit: 20,
  fields: ['name', 'aliases', 'platforms', 'release-date']
};
```
Or very sparse: 
```javascript
var options = {
  query: 'Diablo'
}
```
**NOTE**

If you do not provide a value for one of the variables in options, default values will be used.

These are:

- resources: all
- fields: all
- limit: 0
- offset: 0

_Note that for the search method a query MUST be provided_

Check here for the values that can be included in fields: http://www.giantbomb.com/api/documentation

## getUpcoming()
Returns upcoming videos and live shows from Giant Bomb
```javascript
gb.getUpcoming((error, response, body) => {
	if(!error && response.statusCode == 200){
		console.dir(body);
	} else {
		console.log(body);
	}
});	
```
_Outputs_
```javascript
{ liveNow: null,
  upcoming:
   [ { type: 'Live Show',
       title: 'Unprofessional Fridays: 10/21/2016',
       image: 'http://static.giantbomb.com/uploads/original/23/233047/2894071-tumblr_mp6n9qzbqp1rt6ovxo1_1280.jpg',
       date: 'Oct 21, 2016 03:00 PM',
       premium: true } ] }
```
