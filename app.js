var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    Task = require('./api/models/model'),
    bodyParser = require('body-parser'),
    mongoose = require('./api/database');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/routes');
routes(app);


app.listen(port);
console.log('Server ON, port: ' + port);
