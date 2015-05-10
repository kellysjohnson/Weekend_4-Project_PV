var express = require('express');
var app = express();

var path = require('path');

//var jsonData = require('./data.json');

app.set('port', process.env.PORT || 5000);

app.get('/*', function (request, response) {
    var file = request.params[0] || 'views/index.html';

    response.sendFile(path.join(__dirname, 'public', file))
});


app.listen(app.get('port'), function(){
    console.log("I am listening on port: " + (app.get('port')));
});