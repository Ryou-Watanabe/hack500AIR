#! /usr/bin/env python
# -*- coding: utf-8 -*-

import os
import socket
import sys
import requests
import json
from flask import Flask, request, redirect, url_for, abort, jsonify
from flask_restful import Resource, Api
from werkzeug.utils import secure_filename

app = Flask(__name__)
api = Api(app)

class Bot(Resource):
	def post(self):
		if request.headers['Content-Type'] == 'application/json':
			message = request.json['message']
			s = requests.session()
			api_key = "2d798014ce4123136c50"
			url = "https://chatbot-api.userlocal.jp/api/chat?"

			params = {"message" : message,
			"key" : api_key}

			r = s.post(url=url, params=params)
			r.text
			data = r.json()
			return data.get('result')

class Notification(Resource):
	def post(self):
		if request.headers['Content-Type'] == 'application/json':
			kind = request.json['kind']
			# print(kind)
			params = {"kind" : kind}

			r = s.post(url="http://172.24.245.214.:8080/api/client-attack", params=params)
			print("electron node response : " + r.responsText)
			return "200 OK"

class GetMetroDelay(Resource):
	def get(self):
		s = requests.session()
		metro_url = "https://api.tokyometroapp.jp/api/v2/datapoints?"
		rdf_param = "odpt:TrainInformation"
		apikey_param_metro = "632506ae17ec0c076425215e5d467e8d7497e5b84d1fa0b18347c2c9a35c86be"

		params_metro = {
		    "rdf:type": rdf_param,
		    "acl:consumerKey": apikey_param_metro
		}

		r = s.get(metro_url, params=params_metro)

		text = r.text
		text = json.loads(text, "Shift-JIS")

		return text

api.add_resource(Bot, '/api/bot')
api.add_resource(Notification, '/api/server-notification')
api.add_resource(GetMetroDelay, '/api/get-metro-delay')

@app.after_request

def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  return response

if __name__ == '__main__':
	ip = socket.gethostbyname(socket.gethostname())
	print('input your choregraphe [post] box parameter >>> ' + ip)
	# app.debug=True
	app.run(host=ip)