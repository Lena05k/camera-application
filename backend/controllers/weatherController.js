const db = require('../models/webModels');
const WeatherForecast = db.WeatherForecast;

exports.create = async (req, res) => {
    if (!req.body.temperature || !req.body.airPressure || !req.body.humidity || !req.body.windSpeed) {
        res.status(400).send({ message: "Temperature, air pressure, humidity, and wind speed cannot be empty!" });
        return;
    }

    const weather = {
        temperature: req.body.temperature,
        airPressure: req.body.airPressure,
        humidity: req.body.humidity,
        windSpeed: req.body.windSpeed
    };

    try {
        const newWeather = await WeatherForecast.create(weather);
        res.status(201).send(newWeather);
    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while creating the Weather Forecast." });
    }
};

exports.findAll = async (req, res) => {
    try {
        const weathers = await WeatherForecast.findAll();
        res.send(weathers);
    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while retrieving weather forecasts." });
    }
};

exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const weather = await WeatherForecast.findByPk(id);
        if (weather) {
            res.send(weather);
        } else {
            res.status(404).send({
                message: `Cannot find Weather Forecast with id=${id}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error retrieving Weather Forecast with id=" + id
        });
    }
};

exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await WeatherForecast.update(req.body, {
            where: { id: id }
        });
        if (num == 1) {
            res.send({
                message: "Weather Forecast was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Weather Forecast with id=${id}. Maybe Weather Forecast was not found or req.body is empty!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error updating Weather Forecast with id=" + id
        });
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await WeatherForecast.destroy({
            where: { id: id }
        });
        if (num == 1) {
            res.send({
                message: "Weather Forecast was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Weather Forecast with id=${id}. Maybe Weather Forecast was not found!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Could not delete Weather Forecast with id=" + id
        });
    }
};
