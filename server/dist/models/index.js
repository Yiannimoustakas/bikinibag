'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Create database scheme for notes
 */
var UserSchema = new Schema({
  email: {
    type: String,
    required: "What is the users email?"
  }
});

module.exports = mongoose.model('Users', UserSchema);
//# sourceMappingURL=index.js.map