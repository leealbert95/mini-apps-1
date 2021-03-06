var express = require('express');
var path = require('path');

const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function() {
  console.log('Listening on port: ' + port);
})