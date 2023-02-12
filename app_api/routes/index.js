const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');
const suitesController = require('../controllers/suites');
const foodsController = require('../controllers/foods');
const storiesController = require('../controllers/stories');
const informationController = require('../controllers/information');

// Travel
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

// Rooms
router
    .route('/suites')
    .get(suitesController.suitesList);

router
    .route('/suites/:suiteCode')
    .get(suitesController.suitesFindByCode);

// Meals
router
    .route('/foods')
    .get(foodsController.foodsList);

router
    .route('/foods/:foodCode')
    .get(foodsController.foodsFindByCode);

// News
router
    .route('/stories')
    .get(storiesController.storiesList);

router
    .route('/stories/:storyCode')
    .get(storiesController.storiesFindByCode);

// About
router
    .route('/information')
    .get(informationController.informationList);

router
    .route('/informaiton/:informationCode')
    .get(informationController.informationFindByCode);



module.exports = router;