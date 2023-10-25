module.exports = app => {
    const reposts = 'controllers/RepostController.js';
    const router = require('express').Router();
    router.get('/reposts', reposts.findAll);
};