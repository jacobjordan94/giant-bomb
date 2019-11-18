# Giant Bomb API Wrapper 
A Giant Bomb API Wrapper written for NodeJS. Easily pull information on games, franchises, platforms, etc. from the largest video game database on the internet.
## Installation (Requires Node v6 or higher)
`npm install giant-bomb`
## Setup 
```javascript
var GiantBomb = require('giant-bomb');
var gb = new GiantBomb('your api key', 'unique user-agent');
```
### User-Agent
Good User-Agents: 
- '@MyCoolGiantBombAPIApp - Runs a request once an hour'
- 'Bot for Giant Bomb Unarchived to catch live shows. Runs a single request every 5 minutes.'

Bad User-Agents: 
- 'MozillaFirefox/1.0'
- 'totally unique'
## Before Using ##
- Have a basic understanding of the [Giant Bomb API](http://www.giantbomb.com/api/documentation)
- If you find the Giant Bomb API useful, you can support the site [here.](https://www.giantbomb.com/upgrade/)
## What's new in 2.0? ##
### New ###
- Callbacks are now optional, every function will return a promise (See examples in this README, as documentation is not up to date)
- Support for XML format (Must specify, defaults to JSON)
- Add support for these endpoints (get-all-saved-times, save-time, get-saved-time, current-live)
- Use HTTPS
### Breaking Changes from v1.3 ###
- Body will now always be returned as a string, you must parse the string as JSON yourself if using the JSON format
- getVideosShows() function renamed to getVideoShows()
### Planned updates ###
- Add subscriber_only and page filters support to search function 
## How to Use
For v1.3 of this library please refer to the [wiki.]( https://github.com/jacobjordan94/giant-bomb/wiki)
### options
The options object is the first argument of all functions in this library unless noted.
```javascript
let options = {
    id: number, // id of resource to get
    format: string = 'json', // 'json' | 'xml' - defaults to json
    query: string, // search query - used in search() function
    fields: string[], // fields to return - ex: ['name', 'deck'] - defaults to all
    resources: string[], // list of resources to filter results - used in search() function, ex: ['game', 'franchise']
    sort: string // sort filter - 'asc' | 'desc'
    limit: number = 0, // number of results to return per page - defaults to 0
    offset: number = 0, // return results starting with the object at the offset specified
    filter: string, // see official giant bomb api documentation
}; 
```
### .search(options, callback?) => Promise<string\>
You can test the following code at https://tonicdev.com/npm/giant-bomb  - **(Remember to change Node version to >v6 and put in your own API key)**
```javascript
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
### .get[resource\](options, callback?) => Promise<string\>
See Giant Bomb API Documentation for list of resources
```javascript
let id = 56733; // Super Mario Odyssey
gb.getGame({id: id, fields: ['name', 'deck'], format: 'json'}.then(body => {
    let data = JSON.parse(body);
    console.log(data.results.name);
    console.log(data.results.deck);
})
.catch(err => {
    console.log(err.error);
    console.log(err.response);
    console.log(err.body);
});
```
```
OUTPUT:
Super Mario Odyssey
Nintendo's favorite plumber and his new hat-shaped companion travel far beyond the Mushroom Kingdom in this Switch-exclusive 3D platformer.
```
### .get[resources\](options, callback?) => Promise<string\>
See Giant Bomb API Documentation for list of resources
```javascript
gb.getGames({limit: 5, offset: 21778, fields: ['name', 'platforms']}).then(body => {
    let data = JSON.parse(body);
    data.results.forEach(game => {
        console.log(`${game.name} is available on ${game.platforms.length + (game.platforms.length > 1 ? ' platforms.' : ' platform.')}`);
    });
})
.catch(err => {
    console.log(err.error);
    console.log(err.response);
    console.log(err.body);
});
```
```
OUTPUT:
StarCraft II: Heart of the Swarm is available on 2 platforms.
StarCraft II: Legacy of the Void is available on 2 platforms.
Dreamfall Chapters is available on 4 platforms.
Blast Lacrosse is available on 1 platform.
Ichigo Mashimaro is available on 1 platform.
```
### .getUpcoming(callback) => void
**Could break at anytime**
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
### .getCurrentLive() => Promise<string\>
```javascript
gb.getCurrentLive().then(body => {
    let data = JSON.parse(body);
    console.log(data);
});
```
### .getSavedTime(video_id: number|string, callback?)
```javascript
let video_id = 19728; // Quick Look: Luigi's Mansion 3
gb.getSavedTime(video_id).then((body) => {
    let data = JSON.parse(body);
    console.log(data);
});
```
### .saveTime(video_id: number|string, time_to_save: number|string, callback?) => Promise<string\>
```javascript
// reset video progress
let video_id = 19728; // Quick Look: Luigi's Mansion 3
gb.saveTime(video_id, 0).then(body => {
    let data = JSON.parse(body);
    console.log(data);
});
``` 
### .getAllSavedTimes(callback?) =>  Promise<string\>
```javascript
gb.getAllSavedTimes().then(body => {
    let data = JSON.parse(body);
    console.log(data);
});
```