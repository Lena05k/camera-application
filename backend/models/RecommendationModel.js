module.exports = (sequelize, DataTypes) => {
    const Recommendation = sequelize.define("Recommendation", {
        text:{
            type: DataTypes.TEXT,
        },
    });
    return Recommendation;
};