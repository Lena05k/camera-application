const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

router.post('/', reportController.createAndRetrieveFullReport); // Создание отчета
router.get('/', reportController.findAll); // Получение всех отчетов
router.get('/:id', reportController.findOne); // Получение одного отчета по ID
router.put('/:id', reportController.update); // Обновление отчета
router.delete('/:id', reportController.delete); // Удаление отчета

module.exports = router;
