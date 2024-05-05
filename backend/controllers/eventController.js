const db = require('../models');
const Event = db.Event;

exports.create = async (req, res) => {
    const event = {
        eventDescription: req.body.eventDescription,
        eventType: req.body.eventType
    };

    try {
        const newEvent = await Event.create(event);
        res.status(201).send(newEvent);
    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while creating the Event." });
    }
};

exports.findAll = async (req, res) => {
    try {
        const events = await Event.findAll();
        res.send(events);
    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while retrieving events." });
    }
};

exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const event = await Event.findByPk(id);
        if (event) {
            res.send(event);
        } else {
            res.status(404).send({
                message: `Cannot find Event with id=${id}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error retrieving Event with id=" + id
        });
    }
};

exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await Event.update(req.body, {
            where: { id: id }
        });
        if (num == 1) {
            res.send({
                message: "Event was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Event with id=${id}. Maybe Event was not found or req.body is empty!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error updating Event with id=" + id
        });
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await Event.destroy({
            where: { id: id }
        });
        if (num == 1) {
            res.send({
                message: "Event was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Event with id=${id}. Maybe Event was not found!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Could not delete Event with id=" + id
        });
    }
};
