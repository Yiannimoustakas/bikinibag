'use strict';

var mongoose = require('mongoose');
var User = mongoose.model('Users');

exports.listUsers = function (req, res) {
  User.find({}, function (err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

exports.createUser = function (req, res) {
  var newUser = new User({
    email: req.body.email
  });

  newUser.save(function (err, user) {
    if (err) {
      res.send(err);
    }

    res.json(user);
  });
};
//# sourceMappingURL=index.js.map