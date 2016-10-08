'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
var url = require('url');
var twitter = require('twitter');

var app = express();
var PORT = process.env.PORT || 8080;
var router = express.Router();

// twitter setting's
var client = new twitter({
	consumer_key:        'dFXC2k1M6QZv1Lxwm0AcExNIp',
	consumer_secret:     'Om7mJt9Dg7Bj7GH0vZB3MykfHoDzKGmbBk5tNsfHC2s4UEcMD0',
	access_token_key:    '396444868-f6f5yehUj53Xft2KIh9dJBq6QcqyDeQ0JeBuXMOY',
	access_token_secret: '7TwxApPelkHCa5KlPoVrB9pe3DUbPmAurUfdGoB3HOLEh'
});

app.use(bodyParser.urlencoded({extended : true }));
app.use(bodyParser.json());
app.use(morgan('short'));

app.post('/api', function(req, res){

	//posting twitter
	client.post('statuses/update',
		{status: 'へろー(テスト)'},
		function(error, tweet, response){
			console.log(response.statusCode);
			if (! error) {
				console.log('tweet is error : ' + error);
			}
		});

	res.contentType('application/json');
	var json = {
		comment : 'hello',
		contents_url : "https://www.google.co.jp/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjQy_HsuMrPAhWFHZQKHa0PBHsQtwIIHjAA&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DEi3STJUd0GI&usg=AFQjCNF5ph67dMI7KXM0iJebuwPCDSzOOA&sig2=ZpUW5UHYeGinXSSIPzWdyw"
	};
	res.end(JSON.stringify(json));

	//DEMO用Youtube URLをJSONで返す

});

app.listen(PORT, function(){
	console.log('server is running' + ' :' + PORT);
});