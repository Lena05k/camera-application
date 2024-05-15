const db = require('../models/webModels');
const Video = db.Video;

exports.create = async (req, res) => {
    if (!req.body.path) {
        res.status(400).send({ message: "Video path cannot be empty!" });
        return;
    }

    const video = {
        path: req.body.path,
        data: req.body.data // Предполагается, что данные видео могут быть отправлены напрямую
    };

    try {
        const newVideo = await Video.create(video);
        res.status(201).send(newVideo);
    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while creating the Video." });
    }
};

exports.findAll = async (req, res) => {
    try {
        const videos = await Video.findAll();
        res.send(videos);
    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while retrieving videos." });
    }
};

exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const video = await Video.findByPk(id);
        if (video) {
            res.send(video);
        } else {
            res.status(404).send({
                message: `Cannot find Video with id=${id}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error retrieving Video with id=" + id
        });
    }
};

exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await Video.update(req.body, {
            where: { id: id }
        });
        if (num == 1) {
            res.send({
                message: "Video was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Video with id=${id}. Maybe Video was not found or req.body is empty!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error updating Video with id=" + id
        });
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await Video.destroy({
            where: { id: id }
        });
        if (num == 1) {
            res.send({
                message: "Video was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Video with id=${id}. Maybe Video was not found!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Could not delete Video with id=" + id
        });
    }
};
