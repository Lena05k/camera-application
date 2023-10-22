module.exports = (sequelize, DataTypes) => {
    const Video = sequelize.define("Video", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            path: DataTypes.STRING,
            data: DataTypes.BLOB,
            primaryKey: true
        },
    });
    return Video;
};