
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require("cookie-parser");
var session = require('cookie-session')
var nodify = require('nodify-shopify');
var shopifyController = require('./controllers/index.js');

var apiKey, secret; 
var persistentKeys= {};

 if(process.env.SHOPIFY_API_KEY != undefined && process.env.SHOPIFY_SECRET != undefined){
 	apiKey = process.env.SHOPIFY_API_KEY;
 	secret = process.env.SHOPIFY_SECRET;
}
else {
	var config = require ('./config.json');
	apiKey = config.apiKey;
 	secret = config.secret;
}

var app = express();
app.locals.moment = require('moment');
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());
app.use(cookieParser());
app.use(session({ secret: "shhhhh!!!!" }));

app.get('/', shopifyController.index);
app.get('/login', shopifyController.login);
app.post('/login/authenticate', shopifyController.authenticate);
app.get('/login/authenticate', shopifyController.authenticate);
app.get('/login/finalize', shopifyController.finalize);
app.get('/login/finalize/token', shopifyController.token);
app.get('/logout', shopifyController.logout);
app.get('/plans', shopifyController.plans);
app.get('/faq', shopifyController.faq);	
app.get('/unpaid');
app.get('/paid');
app.get('/shipped');


var server = app.listen(6873, function() {
	console.log('Express server listening on port ' + server.address().port);
});




