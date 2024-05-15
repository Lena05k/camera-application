const db = require('../models/webModels');
const Location = db.Location;

exports.create = async (req, res) => {
    if (!req.body.workshop || !req.body.latitude || !req.body.longitude) {
        res.status(400).send({ message: "Workshop, latitude and longitude cannot be empty!" });
        return;
    }

    const location = {
        workshop: req.body.workshop,
        nmr: req.body.nmr,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        support: req.body.support
    };

    try {
        const newLocation = await Location.create(location);
        res.status(201).send(newLocation);
    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while creating the Location." });
    }
};

exports.findAll = async (req, res) => {
    try {
        const locations = await Location.findAll();
        res.send(locations);
    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while retrieving locations." });
    }
};

exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const location = await Location.findByPk(id);
        if (location) {
            res.send(location);
        } else {
            res.status(404).send({
                message: `Cannot find Location with id=${id}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error retrieving Location with id=" + id
        });
    }
};

exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await Location.update(req.body, {
            where: { id: id }
        });
        if (num == 1) {
            res.send({
                message: "Location was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Location with id=${id}. Maybe Location was not found or req.body is empty!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error updating Location with id=" + id
        });
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await Location.destroy({
            where: { id: id }
        });
        if (num == 1) {
            res.send({
                message: "Location was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Location with id=${id}. Maybe Location was not found!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Could not delete Location with id=" + id
        });
    }
};
