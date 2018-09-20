'use strict';
var mongoose = require('mongoose');
var Planet = mongoose.Schema;


var PlanetSchema = new Planet({
    name: {
        type: String,
        required: 'true'
    },
    climate: {
        type: String,
        required: 'true'
    },
    terrain: {
        type: String,
        required: 'true'
    },
    movie_appearances: {
        type: String,
        default: 0
    }
});

module.exports = mongoose.model('Planets', PlanetSchema);
