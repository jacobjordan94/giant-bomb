# Giant Bomb API Wrapper 
A Giant Bomb API Wrapper written for NodeJS. Easily pull information on games, franchises, platforms, etc. from the largest video game database on the internet.

## Installation 
`npm install giant-bomb`

***Node v6 or higher is required***

## Setup 
```javascript
var GiantBomb = require('giant-bomb');
var gb = new GiantBomb('your api key', 'unique user-agent');
```

## Current Methods

| name          | parameters          | type               |
|---------------|---------------------|--------------------|
| search        | (options, callback) | (object, function) | 
| getGame       | (options, callback) | (object, function) |
| getVideo      | (options, callback) | (object, function) |
| getPlatform   | (options, callback) | (object, function) |
| getPlatforms  | (options, callback) | (object, function) |
| getFranchise  | (options, callback) | (object, function) |
| getFranchises | (options, callback) | (object, function) |

## Example / Walkthrough
You can test the following code at https://tonicdev.com/npm/giant-bomb 

**(Remember to change Node version to >v6 and put in your own API key)**
```javascript
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

## Search

### Options
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

**For the getGame() and getVideo() methods an id must be passed into the options object**
