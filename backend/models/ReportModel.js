module.exports = (sequelize, DataTypes) => {
    const Report = sequelize.define("Repost", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        }
    });
    return Report;
};