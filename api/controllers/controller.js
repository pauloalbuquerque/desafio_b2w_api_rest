'use strict';
const https = require('https');
var mongoose = require('mongoose'),
Planet = mongoose.model('Planets');


var swapi = function (url) {
    return new Promise(function (resolve, reject) {
        https.get(url, function (resp) {
            var data = '';

            resp.on('data', function (chunk) {
                data += chunk;
            });

            resp.on('end', function () {
                var result = JSON.parse(data)['results'][0];
                resolve(result)
            });
        }).on("error", function(err){
            reject(err)
        });
    });
 }

//GET
exports.list_all_planets = function (req, res) {
    Planet.find({}, function (err, planet) {
        if (err)
            res.send(err);
        res.json(planet);
    });
}

//POST
exports.create_a_planet = function (req, res) {
    if (req['body']['name']) {
        const name = req['body']['name'];
        swapi('https://swapi.co/api/planets/?search=' + name).then(function (result) {
            if (result !== undefined) {
                req.body['movie_appearances'] = result['films'].length;
                console.log(req)
            }
            var new_planet = new Planet(req.body);
            new_planet.save(function (err, planet) {
                if (err)
                    res.send(err);
                res.json(planet);
            });
        })
      }

    else {
        res.json({message: 'Error'});
    }

};

//GET planets By ID
exports.read_a_planet = function (req, res) {
    Planet.findById(req.params.planetId, function (err, planet) {
        if (err)
            res.send(err);
        res.json(planet);
    });
};


//PUT
exports.update_a_planet = function (req, res) {
    Planet.findOneAndUpdate({_id: req.params.planetId}, req.body, {new: true}, function (err, planet) {
        if (err)
            res.send(err);
        res.json(planet);
    });
};

//DELETE
exports.delete_a_planet = function (req, res) {
      Planet.remove({
        _id: req.params.planetId
    }, function (err, planet) {
        if (err)
            res.send(err);
        res.json({message: 'Successfully deleted planet'});
    });
};
