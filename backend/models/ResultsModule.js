module.exports = (sequelize, DataTypes) => {
    const Result = sequelize.define("Result", {
        text:{
            type: DataTypes.text,
        },
    });
    return Result;
};