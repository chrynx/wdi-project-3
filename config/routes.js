const router = require('express').Router();
const locations = require('../controllers/locations');
const cities = require('../controllers/cities');
const users = require('../controllers/users');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

// --------------
router.route('/home')
  .get(cities.index);
// --------------------

// ----------------
router.route('/locations')
  .get(locations.index)
  .post(secureRoute, locations.create);


router.route('/locations/:id')
  .get(locations.show)
  .delete(locations.create);

router.route('/locations/:id/reviews')
  .post(secureRoute, locations.addReview);
router.route('/locations/:id/reviews/:reviewId')
  .delete(secureRoute, locations.deleteReview);
// --------------------------
router.route('/register')
  .post(auth.register);
router.route('/login')
  .post(auth.login);
router.route('/users/:id')
  .get(users.show);

router.all('/*', (req, res) => res.notFound());
module.exports = router;
