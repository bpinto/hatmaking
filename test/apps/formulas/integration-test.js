var request = require('supertest')
  , express = require('express')
  , app     = require("../../../server");

describe('Formulas', function() {
  it('fetches all formulas', function(done) {
    request(app)
    .get('/formulas')
    .expect('formulas', done)
  });
});
