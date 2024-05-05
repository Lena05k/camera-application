const express = require('express');
const router = express.Router();
const defectController = require('../controllers/defectController');

router.post('/', defectController.create); // Создание дефекта
router.get('/', defectController.findAll); // Получение всех дефектов
router.get('/:id', defectController.findOne); // Получение одного дефекта по ID
router.put('/:id', defectController.update); // Обновление дефекта
router.delete('/:id', defectController.delete); // Удаление дефекта

module.exports = router;