var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/noderest', { useNewUrlParser: true });

module.exports = mongoose;
