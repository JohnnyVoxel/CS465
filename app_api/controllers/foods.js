const mongoose = require('mongoose');
const model = mongoose.model('foods');

//GET: /foods - lists all the foods
const foodsList = async (req, res) => {
    model
        .find({})  // Empty filter for all
        .exec((err, foods) => {
            if (!foods) {
                return res
                    .status(404)
                    .json({ "message": "food not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(foods);
            }
        });
};

//GET: /foods/:foodCode - returns a single food
const foodsFindByCode = async (req, res) => {
    model
        .find({ 'code': req.params.foodCode })
        .exec((err, food) => {
            if (!food) {
                return res
                    .status(404)
                    .json({ "message": "food not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(food);
            }
        });
};

module.exports = {
    foodsList,
    foodsFindByCode
};