const City = require('../models/city');

function indexRoute(req, res, next) {
  City
    .find()
    .populate('locations createdBy')
    .exec()
    .then((cities) => res.json(cities))
    .catch(next);
}

function createRoute(req, res, next) {
  req.body.createdBy = req.currentUser;
  City
    .create(req.body)
    .then((city) => res.status(201).json(city))
    .catch(next);
}

function showRoute(req, res, next) {
  City
    .findById(req.params.id)
    .populate('locations createdBy')
    .exec()
    .then((city) => {
      if(!city) return res.notFound();

      res.json(city);
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  City
    .findById(req.params.id)
    .exec()
    .then((city) => {
      if(!city) return res.notFound();

      Object.assign(city, req.body);
      return city.save();
    })
    .then((city) => res.json(city))
    .catch(next);
}

function deleteRoute(req, res, next) {
  City
    .findById(req.params.id)
    .exec()
    .then((city) => {
      if(!city) return res.notFound();

      return city.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
};
