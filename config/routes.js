const router = require('express').Router();
const locations = require('../controllers/locations');
const users = require('../controllers/users');
const auth = require('../controllers/auth');



router.route('/locations')
  .get(locations.index);



router.route('/users')
  .get(users.show);



router.route('/register')
  .get(auth.register);

router.route('/login')
  .get(auth.login);

router.all('/*', (req, res) => res.notFound());
module.exports = router;
