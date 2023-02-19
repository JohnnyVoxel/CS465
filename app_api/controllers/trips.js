const mongoose = require('mongoose');
const Trip = mongoose.model('trips');
const User = mongoose.model('users');

//GET: /trips - lists all the trips
const tripsList = async (req, res) => {
    Trip
        .find({})  // Empty filter for all
        .exec((err, trips) => {
            if (!trips) {
                return res
                    .status(404)
                    .json({ "message": "trip not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trips);
            }
        });
};

//GET: /trips/:tripCode - returns a single trip
const tripsFindByCode = async (req, res) => {
    console.log('tripsFindCode invoked with ' + req.params.tripCode);
    Trip
        .find({ 'code': req.params.tripCode })
        .exec((err, trip) => {
            if (!trip) {
                return res
                    .status(404)
                    .json({ "message": "trip not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trip);
            }
        });
};

const tripsAddTrip = async (req,res) => {
    getUser(req, res,
        (req, res) => {
    Trip
        .create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        },
            (err, trip) => {
                if (err) {
                    return res
                        .status(400) // bad request, invalid content
                        .json(err);
                } else {
                    return res
                        .status(201) // created
                        .json(trip);
                }
            });
        }
    )
}

const tripsUpdateTrip = async (req, res) => {
    console.log(req.body);
    getUser(req, res,
        (req, res) => {
    Trip
        .findOneAndUpdate({ 'code': req.params.tripCode }, {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }, { new: true })
        .then(trip => {
            if (!trip) {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });                console.log("If 404");
            }
            res.send(trip);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            return res
                .status(500) // Server error
                .json(err);
        });
    }
    )
}

const tripsRemoveTrip = async (req, res) => {
    console.log(req.body);
    Trip
        .findOneAndDelete({ 'code': req.params.tripCode }, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Deleted trip ", docs);
            }
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            return res
                .status(500) // Server error
                .json(err);
        });
}

const getUser = (req, res, callback) => {
    if (req.auth && req.auth.email) {
      User
        .findOne({ email: req.auth.email })
        .exec((err, user) => {
            if (!user) {
                return res
                .status(404).
                json({ message: "User not found" });
            } else if (err) {
                console.log(err);
                return res
                    .status(404)
                    .json(err);
            }
        callback(req, res, user.name);
      });
    } else {
      return res
        .status(404)
        .json({ message: "User not found" });
    }
  };

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsRemoveTrip
};