module.exports = (sequelize, DataTypes) => {
    const Results = sequelize.define("Results", {
        text:{
            type: DataTypes.STRING,
        },
    });
    return Results;
};