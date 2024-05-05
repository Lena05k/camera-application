const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

router.post('/', locationController.create); // Создание местоположения
router.get('/', locationController.findAll); // Получение всех местоположений
router.get('/:id', locationController.findOne); // Получение одного местоположения по ID
router.put('/:id', locationController.update); // Обновление местоположения
router.delete('/:id', locationController.delete); // Удаление местоположения

module.exports = router;