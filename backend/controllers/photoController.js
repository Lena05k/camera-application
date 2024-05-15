// controllers/photoController.js
const db = require('../models/webModels');
const Photo = db.Photo;

exports.create = async (req, res) => {
    if (!req.body.path) {
        res.status(400).send({ message: "Path cannot be empty!" });
        return;
    }

    const photo = {
        path: req.body.path,
        data: req.body.data // Предполагаем, что данные могут быть отправлены напрямую
    };

    try {
        const newPhoto = await Photo.create(photo);
        res.status(201).send(newPhoto);
    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while creating the Photo." });
    }
};

exports.findAll = async (req, res) => {
    try {
        const photos = await Photo.findAll();
        res.send(photos);
    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while retrieving photos." });
    }
};

// Получение одной фотографии по идентификатору
exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const photo = await Photo.findByPk(id);
        if (photo) {
            res.send(photo);
        } else {
            res.status(404).send({
                message: `Cannot find Photo with id=${id}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error retrieving Photo with id=" + id
        });
    }
};

// Обновление фотографии по идентификатору
exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await Photo.update(req.body, {
            where: { id: id }
        });
        if (num == 1) {
            res.send({
                message: "Photo was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Photo with id=${id}. Maybe Photo was not found or req.body is empty!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error updating Photo with id=" + id
        });
    }
};

// Удаление фотографии по идентификатору
exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await Photo.destroy({
            where: { id: id }
        });
        if (num == 1) {
            res.send({
                message: "Photo was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Photo with id=${id}. Maybe Photo was not found!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Could not delete Photo with id=" + id
        });
    }
};

