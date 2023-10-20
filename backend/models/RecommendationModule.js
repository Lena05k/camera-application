module.exports = (sequelize, DataTypes) => {
    const Recommendation = sequelize.define("Recommendation", {
        text:{
            type: DataTypes.text,
        },
    });
    return Recommendation;
};