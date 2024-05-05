const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.post('/', eventController.create); // Создание событий
router.get('/', eventController.findAll); // Получение всех событий
router.get('/:id', eventController.findOne); // Получение одного события по ID
router.put('/:id', eventController.update); // Обновление события
router.delete('/:id', eventController.delete); // Удаление события

module.exports = router;