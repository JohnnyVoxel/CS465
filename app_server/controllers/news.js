const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}
const hbs = require('hbs');


/* Render news list view */
const renderNewsList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - News';

    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No stories in database';
        }
    }

    res.render('news', {
        title: pageTitle,
        stories: responseBody,
        message
    });
};

/* GET news list view */
const newsList = (req, res) => {
    const path = '/api/stories';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    console.info('>> newsController.newsList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderNewsList(req, res, body);
        }
    )
};

hbs.registerHelper('ifEquals', function (arg1, arg2, options){
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

module.exports = {
    newsList
};