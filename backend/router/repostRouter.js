module.exports = app => {
    const reposts = 'controllers/RepostController.js';
    const router = require('express').Router();

    router.get('/', function (req, res) {
        console.log(res)
        return reposts.findOne;
    });

    router.post('/', function (req, res) {
       return reposts.create;
    });


    app.use('/api/camera-application', router);
};