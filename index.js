'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
var url = require('url');
var twitter = require('twitter');

var config = require('./config.js');

var app = express();
var PORT = process.env.PORT || 8080;
var router = express.Router();

var tweet_tag = "#hack500air_atsem";

// twitter setting's
var client = new twitter({
	consumer_key:        config.consumer_key,
	consumer_secret:     config.consumer_secret,
	access_token_key:    config.access_token,
	access_token_secret: config.access_token_secret
});

app.use(bodyParser.urlencoded({extended : true }));
app.use(bodyParser.json());
app.use(morgan('short'));

//その人が今無駄な時間を過ごしているかどうかのAPI
// app.get('/api/check', function(req, res){

// });

// Clientからポストされるユーザデータを受け取りツイートするAPI
app.post('/api/user_data', function(req, res){
	console.log(req.body);

	var id = req.body.id;
	var delay_time = req.body.delay_time;
	var contents = req.body.contents;
	var message = req.body.msg;

	client.post('statuses/update',
		{
			status : message + " " + tweet_tag
		},
		function(error, tweet, response){
			if (error) {
				console.log('tweet is error : ' + error);
			}
		});

	res.contentType('application/json');
	var json = {
		contents_url : "https://www.google.co.jp/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjQy_HsuMrPAhWFHZQKHa0PBHsQtwIIHjAA&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DEi3STJUd0GI&usg=AFQjCNF5ph67dMI7KXM0iJebuwPCDSzOOA&sig2=ZpUW5UHYeGinXSSIPzWdyw"
	};
	res.end(JSON.stringify(json));
});

app.listen(PORT, function(){
	console.log('server is running' + ' :' + PORT);
});