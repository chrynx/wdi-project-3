const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Location = require('../models/location');
const City = require('../models/city');
const User = require('../models/user');

mongoose.connect(dbURI, { useMongoClient: true });

Location.collection.drop();
City.collection.drop();
User.collection.drop();

City
  .create([{
    name: 'London',
    country: 'UK',
    image: 'http://www.placecage.com/1000/1000',
    description: 'London is a nice city, consisting of multiple tourist locations and a diverse set of people.'
  },{
    name: 'Paris',
    country: 'France',
    image: 'http://fillmurray.com/1000/1000',
    description: 'Paris is nothing but culture. The vibrant city lights up at night.'
  }])
  .then((cities) => {
    console.log(`${cities.length} cities created`);

    return Location
      .create([{
        name: 'General Assembly',
        image: 'http://www.placecage.com/201/203',
        description: 'It is a good place',
        city: cities[0],
        rating: 4,
        priceRating: 3,
        lat: 50.023,
        lng: -0.1415
      },{
        name: 'Notre-Dame de Paris',
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSQi3L0DjgJYgkHqpYcvo1Z9n7PhFxvWW_rrKOcMzx8vCptRIPa4QQw1g',
        description: 'Notre-Dame de Paris, also known as Notre-Dame Cathedral or simply Notre-Dame, is a medieval Catholic cathedral on the Île de la Cité in the fourth arrondissement of Paris, France.',
        city: cities[1],
        rating: 4.7,
        priceRating: 5,
        lat: 48.8530,
        lng: 2.3499
      }])
      .then(locations => console.log(`${locations.length} locations created!`));
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
