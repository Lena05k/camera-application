module.exports = (sequelize, DataTypes) => {
    const Location = sequelize.define("Location", {
        workshop:{
            type: DataTypes.STRING,
        },
        coordinates: {
            type: DataTypes.INTEGER,
        },
        support: {
            type: DataTypes.INTEGER,
        },
    });
    return Location;
};

