const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}

/* Render rooms list view */
const renderRoomsList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Rooms';

    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No suites in database';
        }
    }

    res.render('rooms', {
        title: pageTitle,
        suites: responseBody,
        message
    });
};

/* GET rooms list view */
const roomsList = (req, res) => {
    const path = '/api/suites';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    console.info('>> roomsController.roomsList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderRoomsList(req, res, body);
        }
    )
};

module.exports = {
    roomsList
};