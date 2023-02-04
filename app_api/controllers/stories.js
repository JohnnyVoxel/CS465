const mongoose = require('mongoose');
const model = mongoose.model('stories');

//GET: /stories - lists all the stories
const storiesList = async (req, res) => {
    model
        .find({})  // Empty filter for all
        .exec((err, stories) => {
            if (!stories) {
                return res
                    .status(404)
                    .json({ "message": "story not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(stories);
            }
        });
};

//GET: /stories/:storyCode - returns a single story
const storiesFindByCode = async (req, res) => {
    model
        .find({ 'code': req.params.storyCode })
        .exec((err, story) => {
            if (!story) {
                return res
                    .status(404)
                    .json({ "message": "story not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(story);
            }
        });
};

module.exports = {
    storiesList,
    storiesFindByCode
};