const mongoose = require('mongoose');
const model = mongoose.model('information');

//GET: /information - lists all the information
const informationList = async (req, res) => {
    model
        .find({})  // Empty filter for all
        .exec((err, information) => {
            if (!information) {
                return res
                    .status(404)
                    .json({ "message": "information not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(information);
            }
        });
};

//GET: /information/:informationCode - returns a single information
const informationFindByCode = async (req, res) => {
    model
        .find({ 'code': req.params.informationCode })
        .exec((err, information) => {
            if (!information) {
                return res
                    .status(404)
                    .json({ "message": "information not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(information);
            }
        });
};

module.exports = {
    informationList,
    informationFindByCode
};