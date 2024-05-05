const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photoController');

router.post('/', photoController.create); // Создание фото
router.get('/', photoController.findAll); // Получение всех фото
router.get('/:id', photoController.findOne); // Получение одной фотографии по ID
router.put('/:id', photoController.update); // Обновление фотографии
router.delete('/:id', photoController.delete); // Удаление фотографии

module.exports = router;
