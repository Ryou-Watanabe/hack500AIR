#! /usr/bin/env python

import os
import socket
import sys
import requests
from flask import Flask, request, redirect, url_for, abort, jsonify
from flask_restful import Resource, Api
from werkzeug.utils import secure_filename

app = Flask(__name__)
api = Api(app)

# @app.route('/api')
	# return 'index.html'

class Bot(Resource):
	# def get(self):
	# 	return {'message' : 'hello'}

	def post(self):
		# if request.headers['Content-Type'] != 'application/json':
		# json = request.args['messages']
		print(request.json['message'])
		s = requests.session()
		api_key = "2d798014ce4123136c50"
		url = "https://chatbot-api.userlocal.jp/api/chat?"

		params = {"message" : message,
		"key" : api_key}

		r = s.post(url, params=params)
		text = r.text
		text = json.loads(text)

		return text.get('result')

api.add_resource(Bot, '/api/bot')

if __name__ == '__main__':
	ip = socket.gethostbyname(socket.gethostname())
	print('input your choregraphe [post] box parameter >>> ' + ip + 'port :')
	app.run(host=ip)