const db = require('../models');
const Defects = db.Defects;

exports.create = async (req, res) => {
    if (!req.body.name) {
        res.status(400).send({ message: "Defect name cannot be empty!" });
        return;
    }

    const defect = {
        name: req.body.name,
        description: req.body.description,
        severity: req.body.severity,
        measuredValue: req.body.measuredValue
    };

    try {
        const newDefect = await Defects.create(defect);
        res.status(201).send(newDefect);
    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while creating the Defect." });
    }
};

exports.findAll = async (req, res) => {
    try {
        const defects = await Defects.findAll();
        res.send(defects);
    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while retrieving defects." });
    }
};

exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const defect = await Defects.findByPk(id);
        if (defect) {
            res.send(defect);
        } else {
            res.status(404).send({
                message: `Cannot find Defect with id=${id}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error retrieving Defect with id=" + id
        });
    }
};

exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await Defects.update(req.body, {
            where: { id: id }
        });
        if (num == 1) {
            res.send({
                message: "Defect was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Defect with id=${id}. Maybe Defect was not found or req.body is empty!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error updating Defect with id=" + id
        });
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await Defects.destroy({
            where: { id: id }
        });
        if (num == 1) {
            res.send({
                message: "Defect was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Defect with id=${id}. Maybe Defect was not found!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Could not delete Defect with id=" + id
        });
    }
};
