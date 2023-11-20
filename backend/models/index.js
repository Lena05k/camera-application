'use strict';

const Sequelize = require('sequelize');
const process = require('process');
const {DataTypes} = require("sequelize");
const env = process.env.NODE_ENV || 'development';
const dbConfig = require('../config/db.config.js');
const db = {};

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Repost = require('./ReportModel')(sequelize, DataTypes);
db.User = require('./UserModel')(sequelize, DataTypes);
db.WeatherForecast = require('./WeatherForecastModel')(sequelize, DataTypes);
db.Location = require('./LocationModel')(sequelize, DataTypes);
db.Defects = require('./DefectsModel')(sequelize, DataTypes);
db.Recommendation = require('./RecommendationModel')(sequelize, DataTypes);
db.Results = require('./ResultsModel')(sequelize, DataTypes);
db.Gallery = require('./GalleryModel')(sequelize, DataTypes);
db.Photo = require('./PhotoModel')(sequelize, DataTypes);
db.Video = require('./VideoModel')(sequelize, DataTypes);
db.Data = require('./DataModel')(sequelize, DataTypes);

// 1 - N у пользователя есть все фото и видео
db.User.hasMany(db.Photo, { as: 'photo', foreignKey: 'photo_id'});
db.User.hasMany(db.Video, { as: 'video', foreignKey: 'video_id'});
// 1 - N Пользователь есть все отчеты
db.User.hasMany(db.Repost, { as: 'repost', foreignKey: 'repost_id' });

// 1 - 1 Фото привязаны к датам
db.Photo.hasOne(db.Data);
// Фото принадлежат отчету и пользователю
db.Photo.belongsTo(db.Repost, { as: 'repost', foreignKey: 'repost_id' });
db.Photo.belongsTo(db.Repost, { as: 'user', foreignKey: 'user_id'});

// 1 - 1 Видео привязаны к датам
db.Video.hasOne(db.Data);
// Видео принадлежат отчету и пользователю
db.Video.belongsTo(db.Repost, { as: 'repost', foreignKey: 'repost_id' });
db.Video.belongsTo(db.Repost, { as: 'user', foreignKey: 'user_id'});

// Даты принадлажат фото и видео
db.Data.belongsTo(db.Photo);
db.Data.belongsTo(db.Video);

// 1 - 1 Отчет привязаны к данным
db.Repost.hasOne(db.WeatherForecast);
db.Repost.hasOne(db.Location);
db.Repost.hasOne(db.Defects);
db.Repost.hasOne(db.Recommendation);
db.Repost.hasOne(db.Results);
// Отчет принадлежит пользователю
db.Repost.belongsTo(db.User, { as: 'user', foreignKey: 'user_id'});

// 1 - 1 Данные принадлежат отчету
db.WeatherForecast.belongsTo(db.Repost, { as: 'repost', foreignKey: 'repost_id' });
db.Location.belongsTo(db.Repost, { as: 'repost', foreignKey: 'repost_id' });
db.Defects.belongsTo(db.Repost, { as: 'repost', foreignKey: 'repost_id' });
db.Recommendation.belongsTo(db.Repost, { as: 'repost', foreignKey: 'repost_id' });
db.Results.belongsTo(db.Repost, { as: 'repost', foreignKey: 'repost_id' });

module.exports = db;
