var fs = require('fs');

var contactinfo = JSON.parse(fs.readFileSync('./data/contactinfo.json', 'utf8'));

/* GET contact view */
const contact = (req, res) => {
    res.render('contact', { title: 'Travlr Getaways', contactinfo });
};

module.exports = {
    contact
};