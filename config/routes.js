const router = require('express').Router();
const locations = require('../controllers/locations');
const cities = require('../controllers/cities');
const users = require('../controllers/users');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

// --------------
router.route('/locations')
  .get(locations.index)
  .post(secureRoute, locations.create);

router.route('/locations/:id')
  .get(locations.show)
  .put(secureRoute, locations.update)
  .delete(secureRoute, locations.delete);

router.route('/locations/:id/comments')
  .post(secureRoute, locations.addComment);

router.route('/locations/:id/comments/:commentId')
  .delete(secureRoute, locations.deleteComment);

router.route('/cities')
  .get(cities.index)
  .post(secureRoute, cities.create);

router.route('/cities/:id')
  .get(cities.show)
  .put(secureRoute, cities.update)
  .delete(secureRoute, cities.delete);
// -----------------------
router.route('/register')
  .post(auth.register);
// ---------------------
router.route('/login')
  .post(auth.login);
// ---------------------
router.route('/users/:id')
  .get(users.show);

router.all('/*', (req, res) => res.notFound());
module.exports = router;
