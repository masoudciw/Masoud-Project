const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/masoud-piano');
// mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://masoud:M4soud4bdi@masoud-piano.4bsc4.mongodb.net/masoud-piano');

module.exports = mongoose.connection;
