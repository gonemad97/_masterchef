const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const masterchefRouter = require('./masterchef-router');

const app = express();
const fileServerMiddleware = express.static('public');
let server = require('http').Server(app);

app.use(bodyParser.json());  // JSON parser
app.use(bodyParser.urlencoded({ extended: true })); // url-encoded parser
app.use(cookieParser());

app.use('/', fileServerMiddleware);
app.use('/', masterchefRouter); //all REST API's

var port = process.env.PORT || 3000;

server.listen(port, function () {
    console.log('App started on port' + port);});