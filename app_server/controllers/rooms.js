var fs = require('fs');

var suites = JSON.parse(fs.readFileSync('./data/suites.json', 'utf8'));

/* GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', { title: 'Travlr Getaways', suites });
};

module.exports = {
    rooms
};