const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  rating: Number,
  lat: Number,
  lng: Number,
  user: { type: mongoose.Schema.ObjectId, ref: 'User'}
});



citySchema
  .virtual('locations', {
    ref: 'Location',
    localField: '_id',
    foreignField: 'city'
  });


module.exports = mongoose.model('City', citySchema);
