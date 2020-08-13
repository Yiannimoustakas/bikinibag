module.exports = (app) => {
  const userList = require('../controllers');

  app.route('/')
    .get(userList.listUsers)
    .post(userList.createUser);
};
