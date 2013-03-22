var express = require('express');
var app = express();

module.exports = app;

app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

//Routes
require('./apps/formulas/routes')(app)

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
