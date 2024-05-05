const express = require('express');
const router = express.Router();
const recommendationController = require('../controllers/recommendationController');

router.post('/', recommendationController.create); // Создание рекомендации
router.get('/', recommendationController.findAll); // Получение всех рекомендаций
router.get('/:id', recommendationController.findOne); // Получение одной рекомендации по ID
router.put('/:id', recommendationController.update); // Обновление рекомендации
router.delete('/:id', recommendationController.delete); // Удаление рекомендации

module.exports = router;