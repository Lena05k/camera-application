module.exports = (sequelize, DataTypes) => {
    const Location = sequelize.define("Location", {
        Temperature:{
            type: DataTypes.INTEGER,
        },
        AirPressure: {
            type: DataTypes.INTEGER,
        },
        Humidity: {
            type: DataTypes.INTEGER,
        },
        WindSpeed: {
            type: DataTypes.INTEGER,
        },
    });
    return Location;
};

