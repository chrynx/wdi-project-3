const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'development';
const dbURI = process.env.MONGO_URI || 'mongodb://localhost/traveller';
const secret = process.env.SECRET || 'shh';


module.exports = { port, env, dbURI, secret };
