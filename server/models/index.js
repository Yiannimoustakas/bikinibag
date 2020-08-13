const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Create database scheme for notes
 */
const UserSchema = new Schema({
  email: {
    type: String,
    required: "What is the users email?"
  }
});

module.exports = mongoose.model('Users', UserSchema);
