/*
 *	by: @JacobAJordan_
 *
 */

var request = require('request');

function GiantBomb(API, userAgent){
	this.API = API;
	this.userAgent = userAgent; 
	this.baseURL = 'http://api.giantbomb.com';

	this.search = function(query, offset, callback){
		var url = `${this.baseURL}/search/?api_key=${this.API}&resources=game&query=${query}&field_list=id,name,image&offset=${offset}&format=json`;
		makeRequest(url, callback, this.userAgent);
	}

	this.getGame = function(id, callback){
		var url = `${this.baseURL}/game/${id}/?api_key=${this.API}&field_list=id,name,deck,publishers,developers,franchises,image,images,genres,original_release_date,platforms,videos,api_detail_url,site_detail_url,date_added,date_last_updated&format=json`;
		makeRequest(url, callback, this.userAgent);
	}

	this.getVideo = function(id, callback){
		var url = `${this.baseURL}/video/${id}/?api_key=${this.API}&format=json`;
		makeRequest(url, callback, this.userAgent);
	}

	this.getPlatform = function(id, callback){
		var url = `${this.baseURL}/platform/${id}/?api_key=${this.API}&field_list=id,name,abbreviation,deck,api_detail_url,image&format=json`;
		makeRequest(url, callback, this.userAgent);
	}

	this.getPlatforms = function(offset, callback){
		var url = `${this.baseURL}/platforms/?api_key=${this.API}&field_list=id,name,abbreviation,deck&offset=${offset}&format=json`;
		makeRequest(url, callback, this.userAgent);
	}

	this.getFranchise = function(id, callback){
		var url = `${this.baseURL}/franchise/${id}/?api_key=${this.API}&field_list=id,name,deck,api_detail_url,image&format=json`;
		makeRequest(url, callback, this.userAgent);
	}

	this.getFranchises = function(offset, callback){
		var url = `${this.baseURL}/franchises/?api_key=${this.API}&field_list=id,name,deck&offset=${offset}&format=json`;
		makeRequest(url, callback, this.userAgent);
	}

	var makeRequest = function(url, callback, userAgent){
		var options = {
			url: url,
			headers: {
				'User-Agent': userAgent
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
}

module.exports = GiantBomb; 
