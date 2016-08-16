var GiantBomb = require("giant-bomb");

//Get API key at http://giantbomb.com/api
var gb = new GiantBomb('your api key goes here', 'agent');

gb.search('Metal Gear', 0, function(err, response, items){
    items.results.forEach(game => {console.log(game.name)});
});