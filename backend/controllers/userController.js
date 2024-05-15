// controllers/userController.js
const db = require('../models/webModels');
const User = db.User;

exports.create = async (req, res) => {
    // Валидация запроса
    if (!req.body.first_name || !req.body.last_name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Создание пользователя
    const user = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        snils: req.body.snils,
        position: req.body.position
    };

    // Сохранение пользователя в базе данных
    try {
        const newUser = await User.create(user);
        res.status(201).send(newUser);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    }
};

exports.findAll = async (req, res) => {
    try {
        const users = await User.findAll();
        res.send(users);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    }
};

exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByPk(id);
        if (user) {
            res.send(user);
        } else {
            res.status(404).send({
                message: `Cannot find User with id=${id}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error retrieving User with id=" + id
        });
    }
};

exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await User.update(req.body, { where: { id: id } });
        if (num[0] === 1) {
            res.send({
                message: "User was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error updating User with id=" + id
        });
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await User.destroy({ where: { id: id } });
        if (num === 1) {
            res.send({
                message: "User was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete User with id=${id}. Maybe User was not found!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Could not delete User with id=" + id
        });
    }
};
