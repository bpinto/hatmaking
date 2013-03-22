var fs = require('fs');

var routes = function(app) {
  app.get('/formulas', function(request, response) {
    fs.readdir('Library/Formula', function(err, files) {
      response.send(files);
    });
  });
};

module.exports = routes
