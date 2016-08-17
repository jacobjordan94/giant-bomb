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

	getGame(options, callback){
		var url = this._buildURL('game', options);
		this._makeRequest(url, callback);
	}

	getVideo(options, callback){
		var url = this._buildURL('video', options);
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

	getFranchise(options, callback){
		var url = this._buildURL('franchise', options);
		this._makeRequest(url, callback);
	}

	getFranchises(options, callback){
		var url = this._buildURL('franchises', options);
		this._makeRequest(url, callback);
	}
}

module.exports = GiantBomb;
