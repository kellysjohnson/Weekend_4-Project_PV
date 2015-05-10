var express = require('express');
var app = express();
var path = require('path');

var gitData = require('./dataCallBack');
//var resume = require('./resume');

//var jsonData = require('./data.json');

app.set('port', process.env.PORT || 5000);

app.get('/resume', function (request, response) {
    var file = request.params[0] || '../public/views/templates/resume.html';

    response.sendFile(path.join(__dirname, 'public', file));
});

app.get('/*', function (request, response) {
    var file = request.params[0] || 'views/index.html';

    response.sendFile(path.join(__dirname, 'public', file));
});

app.listen(app.get('port'), function(){
    console.log("I am listening on port: " + (app.get('port')));
});