module.exports = (sequelize, DataTypes) => {
    const Data = sequelize.define("Data", {
        data: {
            type: DataTypes.DATE,
        },
    });
    return Data;
};