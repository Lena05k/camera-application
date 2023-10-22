'use strict';

// const fs = require('fs');
// const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const {DataTypes} = require("sequelize");
// const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const dbConfig = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (dbConfig.use_env_variable) {
  sequelize = new Sequelize(process.env[dbConfig.use_env_variable], dbConfig);
} else {
  sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Repost = require('./ReportModule')(sequelize, DataTypes);
db.User = require('./UserModul')(sequelize, DataTypes);
db.WeatherForecast = require('./WeatherForecastModule')(sequelize, DataTypes);
db.Location = require('./LocationModule')(sequelize, DataTypes);
db.Defects = require('./DefectsModule')(sequelize, DataTypes);
db.Recommendation = require('./RecommendationModule')(sequelize, DataTypes);
db.Results = require('./ResultsModule')(sequelize, DataTypes);
db.Gallery = require('./GalleryModule')(sequelize, DataTypes);
db.Photo = require('./PhotoModule')(sequelize, DataTypes);
db.Video = require('./VideoModule')(sequelize, DataTypes);
db.Data = require('./DataModule')(sequelize, DataTypes);

// 1 - N Пользователь может бесконечно делать фото и видео
db.User.hasMany(db.Photo, { as: 'photo', foreignKey: 'id_photo'});
db.User.hasMany(db.Video, { as: 'video', foreignKey: 'id_video'});

// 1 - 1 Фото или видео првязаны к дату
db.Photo.belongsTo(db.Data);
db.Video.belongsTo(db.Data);

// 1 - N Пользователь может сколько угодно создавать id_отчет
db.User.hasMany(db.Repost, { as: 'repost', foreignKey: 'id_repost' });

// 1 - 1 Отчет принадлежит только пользователю
db.Repost.belongsTo(db.User, { as: 'user', foreignKey: 'id_user'});

// 1 - 1 Данные принадлежит id_отчету
db.WeatherForecast.belongsTo(db.Repost, { as: 'repost', foreignKey: 'id_repost' });
db.Location.belongsTo(db.Repost, { as: 'repost', foreignKey: 'id_repost' });
db.Defects.belongsTo(db.Repost, { as: 'repost', foreignKey: 'id_repost' });
db.Recommendation.belongsTo(db.Repost, { as: 'repost', foreignKey: 'id_repost' });
db.Results.belongsTo(db.Repost, { as: 'repost', foreignKey: 'id_repost' });
db.Photo.belongsTo(db.Repost, { as: 'repost', foreignKey: 'id_repost' });
db.Video.belongsTo(db.Repost, { as: 'repost', foreignKey: 'id_repost' });

module.exports = db;
