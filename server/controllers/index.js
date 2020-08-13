var mongoose = require('mongoose');
var User = mongoose.model('Users');

exports.listUsers = (req, res) => {
  User.find({}, function(err, user) {
    if (err) {
      res.send(err)
    }
    res.json(user)
  })
};

exports.createUser = (req, res) => {
  const newUser = new User({
    email: req.body.email
  });

  newUser.save((err, user) => {
    if (err) {
      res.send(err);
    }

    res.json(user);
  });
};
