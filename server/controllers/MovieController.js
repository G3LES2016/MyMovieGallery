var restful = require('node-restful');

module.exports = function(app, route){
  //stup controller for REST
  var rest = restful.model(
    'movie',
    app.models.movie
  ).methods(['get', 'put', 'post', 'delete']);

  //register this endpoint with the app
  rest.register(app, route);

  //return Middleware
  return function(req, res, next){
    next();
  };
};
