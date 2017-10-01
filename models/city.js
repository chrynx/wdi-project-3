// const mongoose = require('mongoose');
//
// const citySchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   country: { type: String, required: true},
//   image: { type: String, required: true },
//   description: { type: String, required: true }
// });
//
//
//
// // citySchema
// //   .virtual('locations', {
// //     ref: 'Location',
// //     localField: '_id',
// //     foreignField: 'city'
// //   });
//
//
// module.exports = mongoose.model('City', citySchema);
//



// ----------------------NEW FORM0-------------------
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  rating: Number,
  priceRating: Number,
  lat: Number,
  lng: Number
});

const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true},
  image: { type: String, required: true },
  description: { type: String, required: true },
  locations: [locationSchema]
});

module.exports = mongoose.model('City', citySchema);
