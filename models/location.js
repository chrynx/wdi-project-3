const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  text: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  city: {type: mongoose.Schema.ObjectId, ref: 'City' },
  rating: Number,
  priceRating: Number,
  lat: Number,
  lng: Number,
  user: { type: mongoose.Schema.ObjectId, ref: 'User'},
  reviews: [ reviewSchema ]
});


module.exports = mongoose.model('Location', locationSchema);
