module.exports = function (db) {
    // Связи пользователя
    db.User.hasMany(db.Report, { as: 'reports', foreignKey: 'userId' });
    db.User.hasMany(db.Photo, { as: 'photos', foreignKey: 'userId' });
    db.User.hasMany(db.Video, { as: 'videos', foreignKey: 'userId' });

    // Связи отчетов
    db.Report.belongsTo(db.User, { as: 'user', foreignKey: 'userId' });
    db.Report.hasOne(db.WeatherForecast, { as: 'weather', foreignKey: 'reportId' });
    db.Report.hasOne(db.Location, { as: 'location', foreignKey: 'reportId' });
    db.Report.hasOne(db.Defects, { as: 'defects', foreignKey: 'reportId' });
    db.Report.hasOne(db.Recommendation, { as: 'recommendation', foreignKey: 'reportId' });
    db.Report.hasOne(db.Results, { as: 'results', foreignKey: 'reportId' });
    db.Report.hasOne(db.Gallery, { as: 'gallery', foreignKey: 'reportId' });

    // Обратные связи для одиночных записей
    db.WeatherForecast.belongsTo(db.Report, { as: 'report', foreignKey: 'reportId' });
    db.Location.belongsTo(db.Report, { as: 'report', foreignKey: 'reportId' });
    db.Defects.belongsTo(db.Report, { as: 'report', foreignKey: 'reportId' });
    db.Recommendation.belongsTo(db.Report, { as: 'report', foreignKey: 'reportId' });
    db.Results.belongsTo(db.Report, { as: 'report', foreignKey: 'reportId' });
    db.Gallery.belongsTo(db.Report, { as: 'report', foreignKey: 'reportId' });

    // Связи для медиа и событий
    db.Photo.belongsTo(db.Event, { as: 'event', foreignKey: 'eventId' });
    db.Video.belongsTo(db.Event, { as: 'event', foreignKey: 'eventId' });

    db.Event.hasMany(db.Photo, { as: 'photos', foreignKey: 'eventId' });
    db.Event.hasMany(db.Video, { as: 'videos', foreignKey: 'eventId' });

    // Галерея может содержать множество фото и видео
    db.Gallery.hasMany(db.Photo, { as: 'photos', foreignKey: 'galleryId' });
    db.Gallery.hasMany(db.Video, { as: 'videos', foreignKey: 'galleryId' });

    // Медиафайлы принадлежат галерее
    db.Photo.belongsTo(db.Gallery, { as: 'gallery', foreignKey: 'galleryId' });
    db.Video.belongsTo(db.Gallery, { as: 'gallery', foreignKey: 'galleryId' });

    // Организация связей для событий
    db.Event.belongsTo(db.Location, { as: 'location', foreignKey: 'locationId' });
    db.Location.hasMany(db.Event, { as: 'events', foreignKey: 'locationId' });
};
