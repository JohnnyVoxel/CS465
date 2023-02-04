const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}

/* Render meals list view */
const renderMealsList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Meals';

    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No foods in database';
        }
    }

    res.render('meals', {
        title: pageTitle,
        foods: responseBody,
        message
    });
};

/* GET meals list view */
const mealsList = (req, res) => {
    const path = '/api/foods';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    console.info('>> mealsController.mealsList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderMealsList(req, res, body);
        }
    )
};

module.exports = {
    mealsList
};