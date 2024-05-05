const express = require('express');
const router = express.Router();
const resultsController = require('../controllers/resultsController');

router.post('/', resultsController.create); // Создание результата
router.get('/', resultsController.findAll); // Получение всех результатов
router.get('/:id', resultsController.findOne); // Получение одного результата по ID
router.put('/:id', resultsController.update); // Обновление результата
router.delete('/:id', resultsController.delete); // Удаление результата

module.exports = router;