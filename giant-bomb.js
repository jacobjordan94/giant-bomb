/* 
 * by: @JacobAJordan_ <jacobjordan94@live.com>, <jacobjordan94.github.io>
 *
 * ====================================================================
 *           DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 *                   Version 2, December 2004
 *
 * Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>
 *
 * Everyone is permitted to copy and distribute verbatim or modified
 * copies of this license document, and changing it is allowed as long
 * as the name is changed.
 *
 *           DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 *  TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
 *
 * 0. You just DO WHAT THE FUCK YOU WANT TO.
 * ====================================================================
 * http://www.wtfpl.net/txt/copying/
 */

var request = require('request');

class GiantBomb{
	constructor(apiKey, userAgent){
		this.apiKey = apiKey;
		this.userAgent =  userAgent;
		this.baseURL = 'http:///api.giantbomb.com';
	}

	_makeRequest(url, callback){
		var options = {
			url: url,
			headers: {
				'User-Agent': this.userAgent
			}
		};
		request(options, function(error, response, body){
			if(!error && response.statusCode == 200){
				callback(error, response, JSON.parse(body));
			} else {
				callback(error, response, body);
			}
		});
	}

	_buildURL(type, options){
		var id = options.id;
		var fields = options.fields;
		var offset = options.offset || 0;
		var limit = options.limit || 0;
		var resources = options.resources;
		var query = options.query;

		var url = `${this.baseURL}/${type}` +
	 			  `/${id ? id : ''}` +
		          `/?api_key=${this.apiKey}` + 
		          `${query ? '&query=' + query : ''}` +
		          `${resources ? '&resources=' + resources.join(',') : ''}` +
		          `${fields ? '&field_list=' + fields.join(',') : ''}` +
		          `&offset=${offset}&limit=${limit}&format=json`;
		url = url.replace(/\/\//g, '/');

		return url;  
	}

	search(options, callback){
		var url = this._buildURL('search', options);
		this._makeRequest(url, callback);
	}

	getAccessory(options, callback){
		var url = this._buildURL('accessory', options);
		this._makeRequest(url, callback);
	}

	getAccessories(options, callback){
		var url = this._buildURL('accessories', options);
		this._makeRequest(url, callback);
	}

	getCharacter(options, callback){
		var url = this._buildURL('character', options);
		this._makeRequest(url, callback);
	}

	getCharacters(options, callback){
		var url = this._buildURL('characters', options);
		this._makeRequest(url, callback);
	}

	getChat(options, callback){
		var url = this._buildURL('chat', options);
		this._makeRequest(url, callback);
	}

	getChats(options, callback){
		var url = this._buildURL('chats', options);
		this._makeRequest(url, callback);
	}

	getCompany(options, callback){
		var url = this._buildURL('company', options);
		this._makeRequest(url, callback);
	}

	getCompanies(options, callback){
		var url = this._buildURL('companies', options);
		this._makeRequest(url, callback);
	}

	getConcept(options, callback){
		var url = this._buildURL('concept', options);
		this._makeRequest(url, callback);
	}

	getConcepts(options, callback){
		var url = this._buildURL('concepts', options);
		this._makeRequest(url, callback);
	}

	getFranchise(options, callback){
		var url = this._buildURL('franchise', options);
		this._makeRequest(url, callback);
	}

	getFranchises(options, callback){
		var url = this._buildURL('franchises', options);
		this._makeRequest(url, callback);
	}

	getGame(options, callback){
		var url = this._buildURL('game', options);
		this._makeRequest(url, callback);
	}

	getGames(options, callback){
		var url = this._buildURL('games', options);
		this._makeRequest(url, callback);	
	}

	getGameRating(options, callback){
		var url = this._buildURL('game_rating', options);
		this._makeRequest(url, callback);
	}

	getGameRatings(options, callback){
		var url = this._buildURL('game_ratings', options);
		this._makeRequest(url, callback);
	}

	getGenre(options, callback){
		var url = this._buildURL('genre', options);
		this._makeRequest(url, callback);
	}

	getGenres(options, callback){
		var url = this._buildURL('genres', options);
		this._makeRequest(url, callback);
	}

	getLocation(options, callback){
		var url = this._buildURL('location', options);
		this._makeRequest(url, callback);
	}

	getLocations(options, callback){
		var url = this._buildURL('locations', options);
		this._makeRequest(url, callback);
	}

	getObject(options, callback){
		var url = this._buildURL('object', options);
		this._makeRequest(url, callback);
	}

	getObjects(options, callback){
		var url = this._buildURL('objects', options);
		this._makeRequest(url, callback);
	}

	getPerson(options, callback){
		var url = this._buildURL('person', options);
		this._makeRequest(url, callback);
	}

	getPeople(options, callback){
		var url = this._buildURL('people', options);
		this._makeRequest(url, callback);
	}

	getPlatform(options, callback){
		var url = this._buildURL('platform', options);
		this._makeRequest(url, callback);
	}

	getPlatforms(options, callback){
		var url = this._buildURL('platforms', options);
		this._makeRequest(url, callback);
	}

	getPromo(options, callback){
		var url = this._buildURL('promo', options);
		this._makeRequest(url, callback);
	}

	getPromos(options, callback){
		var url = this._buildURL('promos', options);
		this._makeRequest(url, callback);
	}

	getRatingBoard(options, callback){
		var url = this._buildURL('rating_board', options);
		this._makeRequest(url, callback);
	}

	getRatingBoards(options, callback){
		var url = this._buildURL('rating_boards', options);
		this._makeRequest(url, callback);
	}

	getRegion(options, callback){
		var url = this._buildURL('region', options);
		this._makeRequest(url, callback);
	}

	getRegions(options, callback){
		var url = this._buildURL('regions', options);
		this._makeRequest(url, callback);
	}

	getRelease(options, callback){
		var url = this._buildURL('release', options);
		this._makeRequest(url, callback);
	}

	getReleases(options, callback){
		var url = this._buildURL('releases', options);
		this._makeRequest(url, callback);
	}

	getReview(options, callback){
		var url = this._buildURL('review', options);
		this._makeRequest(url, callback);
	}

	getReviews(options, callback){
		var url = this._buildURL('reviews', options);
		this._makeRequest(url, callback);
	}

	getTheme(options, callback){
		var url = this._buildURL('theme', options);
		this._makeRequest(url, callback);
	}

	getThemes(options, callback){
		var url = this._buildURL('themes', options);
		this._makeRequest(url, callback);
	}

	getTypes(options, callback){
		var url = this._buildURL('types', options);
		this._makeRequest(url, callback);
	}

	getUpcoming(callback){
		var url = 'http://www.giantbomb.com/upcoming_json';
		var options = {
			url: url,
			headers: {
				'User-Agent': this.userAgent
			}
		};
		request(options, function(error, response, body){
			if(!error && response.statusCode == 200){
				callback(error, response, JSON.parse(body));
			} else {
				callback(error, response, body);
			}
		});
	}

	getUserReview(options, callback){
		var url = this._buildURL('user_review', options);
		this._makeRequest(url, callback);
	}

	getUserReviews(options, callback){
		var url = this._buildURL('user_reviews', options);
		this._makeRequest(url, callback);
	}

	getVideo(options, callback){
		var url = this._buildURL('video', options);
		this._makeRequest(url, callback);
	}

	getVideos(options, callback){
		var url = this._buildURL('videos', options);
		this._makeRequest(url, callback);
	}

	getVideoType(options, callback){
		var url = this._buildURL('video_type', options);
		this._makeRequest(url, callback);
	}

	getVideosTypes(options, callback){
		var url = this._buildURL('video_types', options);
		this._makeRequest(url, callback);
	}

	getVideoCategory(options, callback){
		var url = this._buildURL('video_category', options);
		this._makeRequest(url, callback);
	}

	getVideosCategories(options, callback){
		var url = this._buildURL('video_categories', options);
		this._makeRequest(url, callback);
	}

	getVideoShow(options, callback){
		var url = this._buildURL('video_show', options);
		this._makeRequest(url, callback);
	}

	getVideosShows(options, callback){
		var url = this._buildURL('video_shows', options);
		this._makeRequest(url, callback);
	}				
}

module.exports = GiantBomb;
