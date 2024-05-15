module.exports = (sequelize, DataTypes) => {
    const WeatherForecast = sequelize.define("WeatherForecast", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        temperature: {
            type: DataTypes.FLOAT, // Температура может быть дробным числом
            allowNull: false // Если температура всегда требуется
        },
        airPressure: {
            type: DataTypes.FLOAT, // Давление тоже может быть дробным
            allowNull: false // Если давление всегда требуется
        },
        humidity: {
            type: DataTypes.FLOAT, // Влажность в процентах, может быть дробной
            allowNull: false // Если влажность всегда требуется
        },
        windSpeed: {
            type: DataTypes.FLOAT, // Скорость ветра, может быть дробной
            allowNull: false // Если скорость ветра всегда требуется
        },
    });

    return WeatherForecast;
};
