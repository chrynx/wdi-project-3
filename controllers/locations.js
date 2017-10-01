const Location = require('../models/location');

function indexRoute(req, res, next) {
  Location
    .find()
    .populate('category')
    .exec()
    .then((locations) => res.json(locations))
    .catch(next);
}

function createRoute(req, res, next) {
  Location
    .create(req.body)
    .then((location) => res.status(201).json(location))
    .catch(next);
}

function showRoute(req, res, next) {
  Location
    .findById(req.params.id)
    .populate('category')
    .exec()
    .then((location) => {
      if(!location) return res.notFound();

      res.json(location);
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  Location
    .findById(req.params.id)
    .exec()
    .then((location) => {
      if(!location) return res.notFound();

      Object.assign(location, req.body);
      return location.save();
    })
    .then((location) => res.json(location))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Location
    .findById(req.params.id)
    .exec()
    .then((location) => {
      if(!location) return res.notFound();

      return location.remove();
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
