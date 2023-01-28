var fs = require('fs');

var information = JSON.parse(fs.readFileSync('./data/information.json', 'utf8'));

/* GET about view */
const about = (req, res) => {
    res.render('about', { title: 'Travlr Getaways', information });
};

module.exports = {
    about
};