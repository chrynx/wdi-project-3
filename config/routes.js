const router = require('express').Router();
const locations = require('../controllers/locations');
const users = require('../controllers/users');
const auth = require('../controllers/auth');



router.route('/locations')
  .get(locations.index);



router.route('/users')
  .get(users.index);



router.route('/auth')
  .get(auth.index);


module.exports = router;
