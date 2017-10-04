const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Location = require('../models/location');
const City = require('../models/city');

mongoose.connect(dbURI, { useMongoClient: true });

Location.collection.drop();
City.collection.drop();

City
  .create([{
    name: 'London',
    country: 'UK',
    image: 'https://media.timeout.com/images/103042848/image.jpg',
    description: 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic "Big Ben" clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.',
    lat: 51.5074,
    lng: 0.1278
  },{
    name: 'Paris',
    country: 'France',
    image: 'https://en.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_233/visuel-carrousel-dossier-ou-sortir-le-soir-a-paris-740x380-c-dr/16967596-1-fre-FR/Visuel-carrousel-dossier-Ou-sortir-le-soir-a-Paris-740x380-C-DR.jpg',
    description: 'Paris, France\'s capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.',
    lat: 48.8566,
    lng: 2.3522
  },{
    name: 'Barcelona',
    country: 'Spain',
    image: 'http://www.spain.info/export/sites/spaininfo/comun/carrusel-recursos/cataluna/barcelona-000037111798-istock.jpg_369272544.jpg',
    description: 'Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture. The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city. Museu Picasso and Fundació Joan Miró feature modern art by their namesakes. City history museum MUHBA, includes several Roman archaeological sites.',
    lat: 41.3851,
    lng: 2.1734
  },{
    name: 'Manila',
    country: 'Philippines',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2f/d2/manila.jpg',
    description: 'Manila, the capital of the Philippines, is a densely populated bayside city on the island of Luzon, which mixes Spanish colonial architecture with modern skyscrapers. Intramuros, a walled city in colonial times, is the heart of Old Manila. It’s home to the baroque 16th-century San Agustin Church as well as Fort Santiago, a storied citadel and former military prison.',
    lat: 14.5995,
    lng: 120.9842
  },{
    name: 'Bangkok',
    country: 'Thailand',
    image: 'http://static.asiawebdirect.com/m/bangkok/portals/bangkok-com/shared/teasersL/TOP10/top-10-short-things-to-do-in-bangkok/teaserMultiLarge/imageHilight/teaser.jpeg.jpg',
    description: 'Bangkok, Thailand’s capital, is a large city known for ornate shrines and vibrant street life. The boat-filled Chao Phraya River feeds its network of canals, flowing past the Rattanakosin royal district, home to opulent Grand Palace and its sacred Wat Phra Kaew Temple. Nearby is Wat Pho Temple with an enormous reclining Buddha and, on the opposite shore, Wat Arun Temple with its steep steps and Khmer-style spire.',
    lat: 13.7563,
    lng: 100.5018
  },{
    name: 'Zurich',
    country: 'Switzerland',
    image: 'https://cdn.zuerich.com/sites/default/files/styles/sharing/public/web_tt_zurich_icon_1600x900_teaser_01.jpg?itok=YrQgf-6o',
    description: 'The city of Zurich, a global center for banking and finance, lies at the north end of Lake Zurich in northern Switzerland. The picturesque lanes of the central Altstadt (Old Town), on either side of the Limmat River, reflect its pre-medieval history. Waterfront promenades like the Limmatquai follow the river toward the 17th-century Rathaus (town hall).',
    lat: 47.3769,
    lng: 8.5417
  },{
    name: 'New York',
    country: 'USA',
    image: 'https://www.gentlegiant.com/wp-content/uploads/2015/06/New-York.jpg',
    description: 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.',
    lat: 40.7128,
    lng: 74.0059
  },{
    name: 'Beijing',
    country: 'China',
    image: 'http://img.timeoutbeijing.com/201702/20170214122812289.jpg',
    description: 'Beijing, China’s massive capital, has history stretching back 3 millennia. Yet it’s known as much for its modern architecture as its ancient sites such as the grand Forbidden City complex, the imperial palace during the Ming and Qing dynasties. Nearby, the massive Tiananmen Square pedestrian plaza is the site of Mao Zedong’s mausoleum and the National Museum of China, displaying a vast collection of cultural relics.',
    lat: 39.9042,
    lng: 116.4074
  },{
    name: 'Taipei',
    country: 'Taiwan',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/06/d7/dc/f6/bigphotofortaipei.jpg',
    description: 'Taipei, the capital of Taiwan, is a modern metropolis with Japanese colonial lanes, busy shopping streets and contemporary buildings. The skyline is crowned by the 509m-tall, bamboo-shaped Taipei 101 skyscraper, with upscale shops at the base and a rapid elevator to an observatory near the top. Taipei is also known for its lively street-food scene and many night markets, including expansive Shilin market.',
    lat: 25.0330,
    lng: 121.5654
  },{
    name: 'Tokyo',
    country: 'Japan',
    image: 'http://s.telegraph.co.uk/graphics/projects/tokyo-ancient-modern/media/f0pwad_wide-mr.jpg',
    description: 'Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city\'s many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).',
    lat: 35.652832,
    lng: 139.839478
  }])
  .then((cities) => {
    console.log(`${cities.length} cities created`);

    return Location
      .create([{
        name: 'General Assembly London',
        image: 'https://ga-shop-production-herokuapp-com.global.ssl.fastly.net/assets/images/logo_1200_by_627_1QIVL.jpg',
        description: 'Explore your future in coding, data, design and marketing at General Assembly London.',
        city: cities[0],
        rating: 4,
        priceRating: 3,
        lat: 51.5152149,
        lng: -0.07233180000002903
      },{
        name: 'Notre-Dame de Paris',
        image: 'https://en.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_77884/node_77888/cath%C3%A9drale-notre-dame-de-paris-fa%C3%A7ace-%7C-630x405-%7C-%C2%A9-fotolia-miff32/11884108-1-fre-FR/Cath%C3%A9drale-Notre-Dame-de-Paris-Fa%C3%A7ace-%7C-630x405-%7C-%C2%A9-Fotolia-miff32.jpg',
        description: 'Notre-Dame de Paris, also known as Notre-Dame Cathedral or simply Notre-Dame, is a medieval Catholic cathedral on the Île de la Cité in the fourth arrondissement of Paris, France.',
        city: cities[1],
        rating: 4,
        priceRating: 5,
        lat: 48.85296820000001,
        lng: 2.3499021000000084
      }])
      .then(locations => console.log(`${locations.length} locations created!`));
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
