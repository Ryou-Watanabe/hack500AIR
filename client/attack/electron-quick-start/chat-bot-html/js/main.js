const $ = require('jquery');
const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended : true }));
app.use(bodyParser.json());

const now = 1;

app.post('/api/client-attack', (req, res) => {
	console.log(req);
	// const notifi_kind = JSON.parse(req.body);
	postKind = req.body
	console.log(postKind["kind"]);

	if (now === 1)window.location.href = "../index.html";
	if (now === 2)window.location.href = "chat-bot-htmlindex.html";
	res.end("200 OK")
});

app.listen(8080, (req, res) => {
	console.log('server is running');
});

$(function(){
	$("#postForm").click( function(){
		send();
	});
})

function addUser(txt)
{
	var div_element = document.createElement("div");
	div_element.innerHTML = '<div class="chat-box"><div class="chat-face"><img src="img/wata1.png" alt="" /></div><div class="chat-area"><div class="chat-hukidashi"id="chat-hukidashi">'+txt+'</div></div></div>';
	var parent_object = document.getElementById("chatroom");
	parent_object.appendChild(div_element);
}
function addBot(txt)
{
	var div_element = document.createElement("div");
	div_element.innerHTML = '<div class="chat-box2"><div class="chat-face2"><img src="img/wata2.png" alt="" /></div><div class="chat-area2"><div class="chat-hukidashi2"id="chat-hukidashi2">'+txt+'</div></div></div>';
	var parent_object = document.getElementById("chatroom");
	parent_object.appendChild(div_element);
}
function Key_on(key)
{
	if(key == 13){
		send();
	}
}

function send()
{
	var url = 'http://172.24.245.214:5000/api/bot';
	var userText = $("#msg").val();

	if (userText === "") {
		alert('テキストを入力してください');
		return;
	}

	addUser(userText);
	var old_msg = document.getElementById("msg");
	old_msg.value = "";
	var jsondata =  {
		message: userText
	};
	$.ajax({
		type: 'post',
		url: url,
		contentType:'application/json',
		data: JSON.stringify(jsondata),
		dataType:'json',
		success: function(json_data) {
			console.log(json_data);
			addBot(json_data);
			$('body').delay(100).animate({
				scrollTop: $(document).height()
			},1500);
		},
		error: function() {
			alert('Server Error. Please try again later.');
		},
		complete: function() {
		}
	})
}
