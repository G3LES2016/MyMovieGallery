var mongoose = require('mongoose');
var mongoose = require('mongoose');

// Export the model.
////create the movie schema
var movieSchema = new mongoose.Schema({
  title : {
    type : String,
    required : true
  },
  url : {
    type : String,
    required :true
  },
  category : {
    type : String,
    rewuired : true
  }
});

//exporta o schema
module.exports =movieSchema;
