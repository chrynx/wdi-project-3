const Location = require('../models/location');

function indexRoute(req, res, next) {
  Location
    .find()
    .populate('createdBy')
    .exec()
    .then((locations) => res.json(locations))
    .catch(next);
}

function createRoute(req, res, next) {

  if(req.file) req.body.image = req.file.filename;
  req.body.createdBy = req.currentUser;

  Location
    .create(req.body)
    .then((location) => res.status(201).json(location))
    .catch(next);
}

function showRoute(req, res, next) {
  Location
    .findById(req.params.id)
    .populate('createdBy comments.createdBy')
    .exec()
    .then((location) => {
      if(!location) return res.notFound();

      return res.json(location);
    })
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
function addReviewRoute(req, res, next) {

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

function deleteReviewRoute(req, res, next) {
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
  delete: deleteRoute,
  addReview: addReviewRoute,
  deleteReview: deleteReviewRoute
};
