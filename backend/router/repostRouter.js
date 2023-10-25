module.exports = app => {
    const reposts = 'controllers/RepostController.js';
    const router = require('express').Router();

    router.post('/', reposts.create);
    router.get('/', reposts.findAll);

    app.use('/api/camera-application', router);
};