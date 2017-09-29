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

module.exports = {
  index: indexRoute
};
