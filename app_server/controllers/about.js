const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}

/* Render about list view */
const renderAboutList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - About';

    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No pmation in database';
        }
    }

    res.render('about', {
        title: pageTitle,
        information: responseBody,
        message
    });
};

/* GET about list view */
const aboutList = (req, res) => {
    const path = '/api/information';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    console.info('>> aboutController.aboutList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderAboutList(req, res, body);
        }
    )
};

module.exports = {
    aboutList
};