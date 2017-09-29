const Location = require('../models/location');




function indexRoute(req, res) {
  Location
    .find()
    .exec()
    .then((locations) => res.json(locations))
    .catch((err) => res.json(err));
}


module.exports = {
  index: indexRoute
};
