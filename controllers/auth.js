const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

function register(req, res) {
  User
    .create(req.body)
    .then(() => res.json({ message: 'Registration successful'}))
    .catch((err) => res.json(err));
}

function login(req, res) {
  User
    .findOne({ email: req.body.email })
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)) return res.unauthorized();

      const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1hr' });
      return res.json({ token, message: `Welcome back ${user.username}` });
    })
    .catch((err) => res.json(err));
}

module.exports = {
  register: register,
  login: login
};