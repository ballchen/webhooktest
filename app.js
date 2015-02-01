var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/', function(req, res){
	console.log(req)
	res.send('hello')
})

app.post('/github', function(req, res){
	console.log(req)
})
//aaaaaa
app.listen(1337);