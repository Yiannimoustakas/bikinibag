'use strict';

module.exports = function (app) {
  var userList = require('../controllers');

  app.route('/').get(userList.listUsers).post(userList.createUser);
};
//# sourceMappingURL=index.js.map