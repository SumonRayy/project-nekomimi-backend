const { dbURL } = require('../config');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbURL.dbURL;
db.videos = require('./videos.meta.model')(mongoose);

module.exports = db;