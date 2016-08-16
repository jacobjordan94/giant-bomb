/*
 *	by: @JacobAJordan_
 *
 */

var request = require('request');

function GiantBomb(API, userAgent){
	this.API = API;
	this.userAgent = userAgent; 
	this.baseURL = 'http://api.giantbomb.com';

	this.search = function(options, callback){
		var query = options.query;
		var offset = options.offset || 0;
		var limit = options.limit || 0;
		var fields = options.fields;
		var resources = options.resources; 
		var url = `${this.baseURL}/search/?api_key=${this.API}${resources ? '&resources=' + resources.join(',') : ''}&query=${query}${fields ? '&field_list=' + fields.join(',') : ''}&offset=${offset}&format=json&limit=${limit}`;
		makeRequest(url, callback, this.userAgent);
	}

	this.getGame = function(options, callback){
		var id = options.id;
		var fields = options.fields;
		var url = `${this.baseURL}/game/${id}/?api_key=${this.API}${fields ? '&field_list=' + fields.join(',') : ''}&format=json`;
		makeRequest(url, callback, this.userAgent);
	}

	this.getVideo = function(options, callback){
		var id = options.id;
		var fields = options.fields;
		var url = `${this.baseURL}/video/${id}/?api_key=${this.API}${fields ? '&field_list=' + fields.join(',') : ''}&format=json`;
		makeRequest(url, callback, this.userAgent);
	}

	this.getPlatform = function(options, callback){
		var id = options.id;
		var fields = options.fields;
		var url = `${this.baseURL}/platform/${id}/?api_key=${this.API}${fields ? '&field_list=' + fields.join(',') : ''}&format=json`;
		makeRequest(url, callback, this.userAgent);
	}

	this.getPlatforms = function(options, callback){
		var offset = options.offset || 0;
		var limit = options.limit || 0;
		var fields = options.fields;
		var url = `${this.baseURL}/platforms/?api_key=${this.API}${fields ? '&field_list=' + fields.join(',') : ''}&offset=${offset}&format=json&limit=${limit}`;
		makeRequest(url, callback, this.userAgent);
	}

	this.getFranchise = function(options, callback){
		var id = options.id;
		var fields = options.fields;
		var url = `${this.baseURL}/franchise/${id}/?api_key=${this.API}&${fields ? '&field_list=' + fields.join(',') : ''}&format=json`;
		makeRequest(url, callback, this.userAgent);
	}

	this.getFranchises = function(options, callback){
		var offset = options.offset || 0;
		var limit = options.limit || 0;
		var fields = options.fields;
		var url = `${this.baseURL}/franchises/?api_key=${this.API}${fields ? '&field_list=' + fields.join(',') : ''}&offset=${offset}&format=json&limit=${limit}`;
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

	var buildURL = function(type){

	}
}

module.exports = GiantBomb; 
