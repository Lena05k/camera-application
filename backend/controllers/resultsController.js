const db = require('../models');
const Results = db.Results;

exports.create = async (req, res) => {
    if (!req.body.text) {
        res.status(400).send({ message: "Results text cannot be empty!" });
        return;
    }

    const results = {
        text: req.body.text
    };

    try {
        const newResults = await Results.create(results);
        res.status(201).send(newResults);
    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while creating the Results." });
    }
};

exports.findAll = async (req, res) => {
    try {
        const resultsList = await Results.findAll();
        res.send(resultsList);
    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while retrieving results." });
    }
};

exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const results = await Results.findByPk(id);
        if (results) {
            res.send(results);
        } else {
            res.status(404).send({
                message: `Cannot find Results with id=${id}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error retrieving Results with id=" + id
        });
    }
};

exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await Results.update(req.body, {
            where: { id: id }
        });
        if (num == 1) {
            res.send({
                message: "Results were updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Results with id=${id}. Maybe Results were not found or req.body is empty!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error updating Results with id=" + id
        });
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await Results.destroy({
            where: { id: id }
        });
        if (num == 1) {
            res.send({
                message: "Results were deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Results with id=${id}. Maybe Results were not found!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Could not delete Results with id=" + id
        });
    }
};
