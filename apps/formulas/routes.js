var routes = function(app) {
  app.get('/formulas', function(request, response) {
    response.send('formulas');
  });
};

module.exports = routes
