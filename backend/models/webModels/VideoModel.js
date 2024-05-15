module.exports = (sequelize, DataTypes) => {
    const Video = sequelize.define("Video", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        path: {
            type: DataTypes.STRING,
            allowNull: false
        },
        data: {
            type: DataTypes.BLOB
        }
    });
    return Video;
};