const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });


const Location = require('../models/location');
const City = require('../models/city');
const User = require('../models/user');

Location.collection.drop();
City.collection.drop();
User.collection.drop();


City
  .create([{
    name: 'London',
    description: 'nice',
    image: 'https://cdn.thinglink.me/api/image/593376750830878722/1240/10/scaletowidth'
  }]).then((cities) => {
    console.log(`${cities.length} categories created`);

    Location
      .create([{
        name: 'General Assembly',
        image: 'https://ga-shop-production-herokuapp-com.global.ssl.fastly.net/assets/images/gallery-1_1WzYk.jpg',
        description: 'campus',
        city: cities[0],
        rating: 5,
        riceRating: 5
      }])
      .then(locations => console.log(`${locations.length} locations created!`))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close());
  });
