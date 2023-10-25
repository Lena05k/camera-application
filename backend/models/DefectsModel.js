module.exports = (sequelize, DataTypes) => {
    const Defects = sequelize.define("Defects", {
        numper:{
            type: DataTypes.INTEGER,
        },
    });
    return Defects;
};