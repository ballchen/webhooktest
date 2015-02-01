var express = require('express');
var bodyParser = require('body-parser')
var app = express();
//sdfjijsublsfjisdjfisj
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/', function(req, res){
	console.log(req)
	res.send('hello')
})

app.post('/github', function(req, res){
	console.log(req)
})
//aaaaaaaaa
app.listen(1337);