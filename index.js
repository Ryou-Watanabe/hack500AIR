'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');

var app = express();
var PORT = process.env.PORT || 8080;
var router = express.Router();

app.use(bodyParser.urlencoded({extended : true }));
app.use(bodyParser.json());
app.use(morgan('short'));

app.post('/api', function(req, res){
	res.contentType('application/json');

	var json = {comment : 'hello'};

	res.end(JSON.stringify(json));
});

app.listen(PORT);
console.log('server is running port : ' + PORT);