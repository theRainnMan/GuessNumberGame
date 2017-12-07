/**
 * Created by George on 2017/10/25.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.end("<h1>Home Page</h1>");
});

app.get('/about', function(req, res){
    res.end("<h1>about Page</h1>");
});

//handle 404
app.use(function(req, res, next){
    res.end("<h1>page not found</h1>")
});

app.listen(3000);
console.log("Express server started!");
