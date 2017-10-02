const Location = require('../models/location');

function indexRoute(req, res, next) {
  Location
    .find()
    .populate('city createdBy user')
    .exec()
    .then((locations) => {
      console.log('This is the response from the indexRoute of the locations controller', locations);
      res.json(locations);
    })
    .catch(next);
}

function createRoute(req, res, next) {
  req.body.createdBy = req.currentUser;
  Location
    .create(req.body)
    .then((location) => res.status(201).json(location))
    .catch(next);
}

function showRoute(req, res, next) {
  Location
    .findById(req.params.id)
    .populate('city createdBy comments.createdBy user')
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

function addCommentRoute(req, res, next) {

  req.body.createdBy = req.currentUser;

  Location
    .findById(req.params.id)
    .exec()
    .then((location) => {
      if(!location) return res.notFound();

      const comment = location.comments.create(req.body);
      location.comments.push(comment);

      return location.save()
        .then(() => res.json(comment));
    })
    .catch(next);
}
function deleteCommentRoute(req, res, next) {
  Location
    .findById(req.params.id)
    .exec()
    .then((location) => {
      if(!location) return res.notFound();

      const comment = location.comments.id(req.params.commentId);
      comment.remove();

      return location.save();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute,
  addComment: addCommentRoute,
  deleteComment: deleteCommentRoute
};
