const mongoose = require('mongoose');
const model = mongoose.model('suites');

//GET: /suites - lists all the suites
const suitesList = async (req, res) => {
    model
        .find({})  // Empty filter for all
        .exec((err, suites) => {
            if (!suites) {
                return res
                    .status(404)
                    .json({ "message": "suite not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(suites);
            }
        });
};

//GET: /suites/:suiteCode - returns a single suite
const suitesFindByCode = async (req, res) => {
    model
        .find({ 'code': req.params.suiteCode })
        .exec((err, suite) => {
            if (!suite) {
                return res
                    .status(404)
                    .json({ "message": "suite not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(suite);
            }
        });
};

module.exports = {
    suitesList,
    suitesFindByCode
};