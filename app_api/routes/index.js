const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');
const suitesController = require('../controllers/suites');
const foodsController = require('../controllers/foods');
const storiesController = require('../controllers/stories');
const informationController = require('../controllers/information');
const authController = require('../controllers/authentication');
const { expressjwt: jwt } = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: "payload",
    algorithms: ["HS256"],
});

// Authentication
router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);
    
// Travel    
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(auth, tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(auth, tripsController.tripsUpdateTrip)
    .delete(auth, tripsController.tripsRemoveTrip);

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