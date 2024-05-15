const db = require('../models/webModels');
const Report = db.Report;

exports.createAndRetrieveFullReport = async (req, res) => {
    try {
        const report = await db.Report.create({
            userId: req.body.userId,
            date: req.body.date
        });

        // Предполагаем, что эти данные уже каким-то образом сохранены или будут сгенерированы
        const weather = await db.WeatherForecast.findOne({ where: { reportId: report.id } });
        const locations = await db.Location.findOne({ where: { reportId: report.id } });
        const defects = await db.Defects.findOne({ where: { reportId: report.id } });
        const recommendations = await db.Recommendation.findOne({ where: { reportId: report.id } });
        const results = await db.Results.findOne({ where: { reportId: report.id } });

        const fullReport = {
            createdAt: report.createdAt,
            updatedAt: report.updatedAt,
            id: report.id,
            userId: report.userId,
            data: {
                weather: weather,
                locations: locations,
                defects: defects,
                recommendations: recommendations,
                results: results
            }
        };

        res.status(201).send(fullReport);
    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while creating the Report." });
    }
};


exports.create = (req, res) => {
    // Проверка на наличие необходимых полей
    if (!req.body.userId) {
        res.status(400).send({
            message: "User ID can not be empty!",
        });
        return;
    }

    // Создание объекта для нового отчёта
    const newReport = {
        userId: req.body.userId, // Используем camelCase, как в модели
        date: req.body.date
    };

    // Создание нового отчёта
    Report.create(newReport)
        .then((data) => {
            res.status(201).send(data); // Отправляем статус 201 при успешном создании
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Report.",
            });
        });
};

exports.findAll = (req, res) => {
    Report.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the Reports.",
            });
        });
};

exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const report = await Report.findByPk(id);
        if (report) {
            res.send(report);
        } else {
            res.status(404).send({ message: `Report not found with id=${id}.` });
        }
    } catch (err) {
        res.status(500).send({ message: `Error retrieving Report with id=${id}` });
    }
};

exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await Report.update(req.body, { where: { id: id } });
        if (num == 1) {
            res.send({ message: "Report was updated successfully." });
        } else {
            res.send({ message: `Cannot update Report with id=${id}. Maybe Report was not found or req.body is empty!` });
        }
    } catch (err) {
        res.status(500).send({ message: `Error updating Report with id=${id}` });
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await Report.destroy({ where: { id: id } });
        if (num == 1) {
            res.send({ message: "Report was deleted successfully!" });
        } else {
            res.send({ message: `Cannot delete Report with id=${id}. Maybe Report was not found!` });
        }
    } catch (err) {
        res.status(500).send({ message: `Could not delete Report with id=${id}` });
    }
};

