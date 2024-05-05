const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

router.post('/', weatherController.create); // Создание погодные условия
router.get('/', weatherController.findAll); // Получение всех погодных условий
router.get('/:id', weatherController.findOne); // Получение одного погодного условия по ID
router.put('/:id', weatherController.update); // Обновление погодного условия
router.delete('/:id', weatherController.delete); // Удаление погодного условия

module.exports = router;