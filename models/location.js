const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  city: {type: mongoose.Schema.ObjectId, ref: 'City' },
  rating: Number,
<<<<<<< HEAD
  priceRating: Number,
  lat: Number,
  lng: Number,
=======
  riceRating: Number,
>>>>>>> development
  user: { type: mongoose.Schema.ObjectId, ref: 'User'}
});


module.exports = mongoose.model('Location', locationSchema);
