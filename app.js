var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res){
	console.log(req)
	res.send('hello')
})

app.post('/github', function(req, res){
	console.log(req)
})
//aaa
app.listen(1337);