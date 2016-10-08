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
// var client = new twitter({
// 	consumer_key:        config.consumer_key,
// 	consumer_secret:     config.consumer_secret,
// 	access_token_key:    config.access_token,
// 	access_token_secret: config.access_token_secret
// });

app.use(bodyParser.urlencoded({extended : true }));
app.use(bodyParser.json());
app.use(morgan('short'));

//その人が今無駄な時間を過ごしているかどうかのAPI
// app.get('/api/check', function(req, res){
// 	var json = {
// 		check : true
// 	};
// 	res.end(JSON.stringify(json));
// });

//ユーザの攻撃操作を受け付ける
// app.post('/api/attack', function(req, res){

// });

app.listen(PORT, function(){
	console.log('server is running' + ' :' + PORT);
});