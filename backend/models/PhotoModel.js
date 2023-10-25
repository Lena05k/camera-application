module.exports = (sequelize, DataTypes) => {
    const Photo = sequelize.define("Photo", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            path: DataTypes.STRING,
            data: DataTypes.BLOB,
            primaryKey: true
        },
    });
    return Photo;
};