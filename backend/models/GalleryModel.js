module.exports = (sequelize, DataTypes) => {
    const Defects = sequelize.define("Defects", {
        Numper:{
            type: DataTypes.INTEGER,
        },
    });
    return Defects;
};