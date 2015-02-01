var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))


app.post('/github', function(req, res){
	console.log(req)
})

app.listen(1337);