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
  }, {
    name: 'Bangkok',
    country: 'Thailand',
    image: 'http://static.asiawebdirect.com/m/bangkok/portals/bangkok-com/shared/teasersL/TOP10/top-10-historical-attractions/teaserMultiLarge/imageHilight/top-10-attractions-bangkok.jpg',
    description: 'London is a great place in the middle of the world'
  }, {
    name: 'Barcelona',
    country: 'Spain',
    image: 'http://barcelona.inno-forum.org/wp-content/uploads/sites/5/2017/02/barcelona-rutas-turisticas-alternativas.jpg',
    description: 'London is a great place in the middle of the world'
  }, {
    name: 'Manila',
    country: 'Philippines',
    image: 'http://esports.inquirer.net/wp-content/uploads/2016/01/Metro_manila_rp.jpg',
    description: 'London is a great place in the middle of the world'
  }, {
    name: 'Paris',
    country: 'France',
    image: 'http://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Paris/paris-attractions-xlarge.jpg',
    description: 'London is a great place in the middle of the world'
  }, {
    name: 'Munich',
    country: 'Germany',
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/03/23/13/munich-alamy.jpg',
    description: 'London is a great place in the middle of the world'
  }, {
    name: 'Rome',
    country: 'Italy',
    image: 'https://lonelyplanetimages.imgix.net/mastheads/stock-photo-roman-sunset-77415821.jpg?sharp=10&vib=20&w=1200',
    description: 'London is a great place in the middle of the world'
  }, {
    name: 'Zurich',
    country: 'Switzerland',
    image: 'https://cdn.zuerich.com/sites/default/files/styles/sharing/public/web_tt_zurich_icon_1600x900_teaser_01.jpg?itok=YrQgf-6o',
    description: 'London is a great place in the middle of the world'
  }, {
    name: 'NewYork',
    country: 'United States',
    image: 'https://www.gentlegiant.com/wp-content/uploads/2015/06/New-York.jpg',
    description: 'London is a great place in the middle of the world'
  }, {
    name: 'Brussels',
    country: 'Belgium',
    image: 'https://www.thonhotels.com/siteassets/hoteller/belgia/brussel/brussel-grand-place-destinasjon.jpg',
    description: 'London is a great place in the middle of the world'
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
