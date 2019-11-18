var request = require('request');

class GiantBomb {
	constructor(api_key, user_agent) {
		this.api_key = api_key;
		this.user_agent =  user_agent;
		this.base_url = 'https://www.giantbomb.com/api';
	}

	_makeRequest(url, callback) {
		return new Promise((resolve, reject) => {
			var options = {
				url: url,
				headers: {
					'User-Agent': this.user_agent
				}
			};
			request(options, function(error, response, body){
				if(!error && response.statusCode == 200) {
					if (callback) callback(error, response, body);
					resolve(body);
				} else {
					if (callback) callback(error, response, body);
					reject({error, response, body});
				}
			});
		});
	}

	_buildURL(type, options) {
		var id = options.id;
		var fields = options.fields;
		var offset = options.offset || 0;
		var limit = options.limit || 0;
		var resources = options.resources;
		var query = options.query;
		var filter = options.filter;
		var sort = options.sort;
		var format = options.format || 'json';

		var url = `${this.base_url}/${type}` +
	 			  `${id ? ('/' + id) : ''}` +
		          `/?api_key=${this.api_key}` + 
		          `${query ? '&query=' + query : ''}` +
		          `${resources ? '&resources=' + resources.join(',') : ''}` +
		          `${fields ? '&field_list=' + fields.join(',') : ''}` +
		          `&offset=${offset}&limit=${limit}&format=${format}` + 
		          `${filter ? `&filter=${filter}` : ''}` + 
		          `${sort ? `&sort=${sort}` : ''}`;
		// url = url.replace(/\/\//g, '/');

		return url;
	}

	search(options, callback = null) {
		var url = this._buildURL('search', options);
		return this._makeRequest(url, callback);
	}

	getAccessory(options, callback = null) {
		var url = this._buildURL('accessory', options);
		return this._makeRequest(url, callback);
	}

	getAccessories(options, callback = null) {
		var url = this._buildURL('accessories', options);
		return this._makeRequest(url, callback);
	}

	getCharacter(options, callback = null) {
		var url = this._buildURL('character', options);
		return this._makeRequest(url, callback);
	}

	getCharacters(options, callback = null) {
		var url = this._buildURL('characters', options);
		return this._makeRequest(url, callback);
	}

	getChat(options, callback = null) {
		var url = this._buildURL('chat', options);
		return this._makeRequest(url, callback);
	}

	getChats(options, callback = null) {
		var url = this._buildURL('chats', options);
		return this._makeRequest(url, callback);
	}

	getCompany(options, callback = null) {
		var url = this._buildURL('company', options);
		return this._makeRequest(url, callback);
	}

	getCompanies(options, callback = null) {
		var url = this._buildURL('companies', options);
		return this._makeRequest(url, callback);
	}

	getConcept(options, callback = null) {
		var url = this._buildURL('concept', options);
		return this._makeRequest(url, callback);
	}

	getConcepts(options, callback = null) {
		var url = this._buildURL('concepts', options);
		return this._makeRequest(url, callback);
	}

	getDLC(options, callback = null) {
		var url = this._buildURL('dlc', options);
		return this._makeRequest(url, callback);
	}

	getDLCs(options, callback = null) {
		var url = this._buildURL('dlcs', options);
		return this._makeRequest(url, callback);
	}

	getFranchise(options, callback) {
		var url = this._buildURL('franchise', options);
		return this._makeRequest(url, callback);
	}

	getFranchises(options, callback = null) {
		var url = this._buildURL('franchises', options);
		return this._makeRequest(url, callback);
	}

	getGame(options, callback = null) {
		var url = this._buildURL('game', options);
		return this._makeRequest(url, callback);
	}

	getGames(options, callback = null) {
		var url = this._buildURL('games', options);
		return this._makeRequest(url, callback);	
	}

	getGameRating(options, callback = null) {
		var url = this._buildURL('game_rating', options);
		return this._makeRequest(url, callback);
	}

	getGameRatings(options, callback = null) {
		var url = this._buildURL('game_ratings', options);
		return this._makeRequest(url, callback);
	}

	getGenre(options, callback = null) {
		var url = this._buildURL('genre', options);
		return this._makeRequest(url, callback);
	}

	getGenres(options, callback = null) {
		var url = this._buildURL('genres', options);
		return this._makeRequest(url, callback);
	}

	getLocation(options, callback = null) {
		var url = this._buildURL('location', options);
		return this._makeRequest(url, callback);
	}

	getLocations(options, callback = null) {
		var url = this._buildURL('locations', options);
		return this._makeRequest(url, callback);
	}

	getObject(options, callback = null) {
		var url = this._buildURL('object', options);
		return this._makeRequest(url, callback);
	}

	getObjects(options, callback = null) {
		var url = this._buildURL('objects', options);
		return this._makeRequest(url, callback);
	}

	getPerson(options, callback = null) {
		var url = this._buildURL('person', options);
		return this._makeRequest(url, callback);
	}

	getPeople(options, callback = null) {
		var url = this._buildURL('people', options);
		return this._makeRequest(url, callback);
	}

	getPlatform(options, callback = null) {
		var url = this._buildURL('platform', options);
		return this._makeRequest(url, callback);
	}

	getPlatforms(options, callback = null) {
		var url = this._buildURL('platforms', options);
		return this._makeRequest(url, callback);
	}

	getPromo(options, callback = null) {
		var url = this._buildURL('promo', options);
		return this._makeRequest(url, callback);
	}

	getPromos(options, callback = null) {
		var url = this._buildURL('promos', options);
		return this._makeRequest(url, callback);
	}

	getRatingBoard(options, callback = null) {
		var url = this._buildURL('rating_board', options);
		return this._makeRequest(url, callback);
	}

	getRatingBoards(options, callback = null) {
		var url = this._buildURL('rating_boards', options);
		return this._makeRequest(url, callback);
	}

	getRegion(options, callback = null) {
		var url = this._buildURL('region', options);
		return this._makeRequest(url, callback);
	}

	getRegions(options, callback = null) {
		var url = this._buildURL('regions', options);
		return this._makeRequest(url, callback);
	}

	getRelease(options, callback = null) {
		var url = this._buildURL('release', options);
		return this._makeRequest(url, callback);
	}

	getReleases(options, callback = null) {
		var url = this._buildURL('releases', options);
		return this._makeRequest(url, callback);
	}

	getReview(options, callback = null) {
		var url = this._buildURL('review', options);
		return this._makeRequest(url, callback);
	}

	getReviews(options, callback = null) {
		var url = this._buildURL('reviews', options);
		return this._makeRequest(url, callback);
	}

	getTheme(options, callback = null) {
		var url = this._buildURL('theme', options);
		return this._makeRequest(url, callback);
	}

	getThemes(options, callback = null) {
		var url = this._buildURL('themes', options);
		return this._makeRequest(url, callback);
	}

	getTypes(options, callback = null) {
		var url = this._buildURL('types', options);
		return this._makeRequest(url, callback);
	}

	getUpcoming(callback = null) {
		var url = 'http://www.giantbomb.com/upcoming_json';
		var options = {
			url: url,
			headers: {
				'User-Agent': this.user_agent
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

	getUserReview(options, callback = null) {
		var url = this._buildURL('user_review', options);
		return this._makeRequest(url, callback);
	}

	getUserReviews(options, callback = null) {
		var url = this._buildURL('user_reviews', options);
		return this._makeRequest(url, callback);
	}

	getVideo(options, callback = null) {
		var url = this._buildURL('video', options);
		return this._makeRequest(url, callback);
	}

	getVideos(options, callback = null) {
		var url = this._buildURL('videos', options);
		return this._makeRequest(url, callback);
	}

	getVideoType(options, callback = null) {
		var url = this._buildURL('video_type', options);
		return this._makeRequest(url, callback);
	}

	getVideosTypes(options, callback = null) {
		var url = this._buildURL('video_types', options);
		return this._makeRequest(url, callback);
	}

	getVideoCategory(options, callback = null) {
		var url = this._buildURL('video_category', options);
		return this._makeRequest(url, callback);
	}

	getVideosCategories(options, callback = null) {
		var url = this._buildURL('video_categories', options);
		return this._makeRequest(url, callback);
	}

	getVideoShow(options, callback = null) {
		var url = this._buildURL('video_show', options);
		return this._makeRequest(url, callback);
	}

	getVideoShows(options, callback = null) {
		var url = this._buildURL('video_shows', options);
		return this._makeRequest(url, callback);
	}

	getCurrentLive(callback = null) {
		var url = this.base_url + '/video/current-live/?api_key=' + this.api_key;
		return this._makeRequest(url, callback);
	}

	getSavedTime(video_id, callback = null) {
		var url = this.base_url + '/video/get-saved-time/?api_key=' + this.api_key;
		url += '&video_id=' + video_id;
		url += '&format=json';

		return this._makeRequest(url, callback);
	}

	saveTime(video_id, time_to_save, callback = null) {
		var url = this.base_url + '/video/save-time/?api_key=' + this.api_key;
		url += '&video_id=' + video_id;
		url += '&time_to_save=' + time_to_save;
		url += '&format=json';

		return this._makeRequest(url, callback);
	}

	getAllSavedTimes(callback = null) {
		var url = this.base_url + '/video/get-all-saved-times/?api_key=' + this.api_key;
		return this._makeRequest(url, callback);
	}

}

module.exports = GiantBomb;
