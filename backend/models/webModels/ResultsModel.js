module.exports = (sequelize, DataTypes) => {
    const Results = sequelize.define("Results", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        text: {
            type: DataTypes.TEXT, // Используйте TEXT для длинного текста
            allowNull: false // Установите false, если поле должно быть обязательным
        }
    });

    return Results;
};
