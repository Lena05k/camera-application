const reposts = require("../controllers/RepostController");
module.exports = app => {
    const reposts = require('../controllers/RepostController.js');
    const router = require('express').Router();

    router.get('/', reposts.findAll);

    router.post('/', reposts.create);


    app.use('/api/camera-application', router);
};