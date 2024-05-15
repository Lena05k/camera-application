const Sequelize = require('sequelize');
const process = require('process');
const { DataTypes } = require("sequelize");
const env = process.env.NODE_ENV || 'development';
const dbConfig = require('../../config/db.config.js');
const db = {};

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  logging: (query, timing) => {
    console.log(query); // Логирует только запрос
    console.log(`Query took ${timing} milliseconds`); // Логирует время выполнения запроса
  }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const modelDefiners = [
  require('./ReportModel'),
  require('./UserModel'),
  require('./WeatherForecastModel'),
  require('./LocationModel'),
  require('./DefectsModel'),
  require('./RecommendationModel'),
  require('./ResultsModel'),
  require('./GalleryModel'),
  require('./PhotoModel'),
  require('./VideoModel'),
  require('./EventModel')
];

modelDefiners.forEach(definer => {
  const model = definer(sequelize, DataTypes);
  db[model.name] = model;
});

require('./relations')(db);

// Инициализация моделей
db.Report = require('./ReportModel')(sequelize, DataTypes);
db.User = require('./UserModel')(sequelize, DataTypes);
db.WeatherForecast = require('./WeatherForecastModel')(sequelize, DataTypes);
db.Location = require('./LocationModel')(sequelize, DataTypes);
db.Defects = require('./DefectsModel')(sequelize, DataTypes);
db.Recommendation = require('./RecommendationModel')(sequelize, DataTypes);
db.Results = require('./ResultsModel')(sequelize, DataTypes);
db.Gallery = require('./GalleryModel')(sequelize, DataTypes);
db.Photo = require('./PhotoModel')(sequelize, DataTypes);
db.Video = require('./VideoModel')(sequelize, DataTypes);
db.Event = require('./EventModel')(sequelize, DataTypes);

// Определение связей
db.User.hasMany(db.Photo, { as: 'photos' });
db.User.hasMany(db.Video, { as: 'videos' });
db.User.hasMany(db.Report, { foreignKey: 'userId' });

db.Photo.belongsTo(db.User, { as: 'user' });
db.Photo.belongsTo(db.Event, { as: 'event' });
db.Video.belongsTo(db.User, { as: 'user' });
db.Video.belongsTo(db.Event, { as: 'event' });

db.Report.hasOne(db.WeatherForecast, { as: 'weather' });
db.Report.hasOne(db.Location, { as: 'location' });
db.Report.hasOne(db.Defects, { as: 'defects' });
db.Report.hasOne(db.Recommendation, { as: 'recommendation' });
db.Report.hasOne(db.Results, { as: 'results' });
db.Report.hasOne(db.Video, { as: 'event' });

db.WeatherForecast.belongsTo(db.Report, { as: 'report' });
db.Location.belongsTo(db.Report, { as: 'report' });
db.Defects.belongsTo(db.Report, { as: 'report' });
db.Recommendation.belongsTo(db.Report, { as: 'report' });
db.Results.belongsTo(db.Report, { as: 'report' });

db.Photo.belongsTo(db.Report, { as: 'report' });
db.Video.belongsTo(db.Report, { as: 'report' });

db.Report.belongsTo(db.User, { foreignKey: 'userId' });

module.exports = db;
