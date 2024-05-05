const db = require('../models');
const Recommendation = db.Recommendation;

exports.create = async (req, res) => {
    if (!req.body.text) {
        res.status(400).send({ message: "Recommendation text cannot be empty!" });
        return;
    }

    const recommendation = {
        text: req.body.text
    };

    try {
        const newRecommendation = await Recommendation.create(recommendation);
        res.status(201).send(newRecommendation);
    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while creating the Recommendation." });
    }
};

exports.findAll = async (req, res) => {
    try {
        const recommendations = await Recommendation.findAll();
        res.send(recommendations);
    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while retrieving recommendations." });
    }
};

exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const recommendation = await Recommendation.findByPk(id);
        if (recommendation) {
            res.send(recommendation);
        } else {
            res.status(404).send({
                message: `Cannot find Recommendation with id=${id}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error retrieving Recommendation with id=" + id
        });
    }
};

exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await Recommendation.update(req.body, {
            where: { id: id }
        });
        if (num == 1) {
            res.send({
                message: "Recommendation was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Recommendation with id=${id}. Maybe Recommendation was not found or req.body is empty!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error updating Recommendation with id=" + id
        });
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await Recommendation.destroy({
            where: { id: id }
        });
        if (num == 1) {
            res.send({
                message: "Recommendation was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Recommendation with id=${id}. Maybe Recommendation was not found!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Could not delete Recommendation with id=" + id
        });
    }
};
