const City = require('../models/city');

function indexRoute(req, res) {
  City
    .find()
    .exec()
    .then((cities) => {
      res.json(cities);
    })
    .catch((err)=> res.json(err));
}
function showRoute(req, res) {
  City
    .findById(req.params.id)
    .exec()
    .then((city) => {
      res.json(city);
    })
    .catch((err)=> res.json(err));
}

module.exports = {
  index: indexRoute,
  show: showRoute
};
