module.exports = (sequelize, DataTypes) => {
    const Gallery = sequelize.define("Gallery", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    });

    return Gallery;
};