var express = require('express');
var app = express();

// install, load, and configure body parser module
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

require("./task/app.js")(app);

// var port = process.env.PORT || 3000;
var port = 3000;

app.listen(port);