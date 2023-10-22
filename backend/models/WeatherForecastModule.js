module.exports = (sequelize, DataTypes) => {
    const WeatherForecast = sequelize.define("WeatherForecast", {
        temperature:{
            type: DataTypes.INTEGER,
        },
        airPressure: {
            type: DataTypes.INTEGER,
        },
        humidity: {
            type: DataTypes.INTEGER,
        },
        windSpeed: {
            type: DataTypes.INTEGER,
        },
    });
    return WeatherForecast;
};
