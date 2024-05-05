const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

router.post('/', videoController.create); // Создание видео
router.get('/', videoController.findAll); // Получение всех видео
router.get('/:id', videoController.findOne); // Получение одного видео по ID
router.put('/:id', videoController.update); // Обновление видео
router.delete('/:id', videoController.delete); // Удаление видео

module.exports = router;
