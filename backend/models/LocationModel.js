module.exports = (sequelize, DataTypes) => {
    const Location = sequelize.define("Location", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        workshop: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nmr: { // Если у вас есть идентификатор НМР, его стоит добавить как поле
            type: DataTypes.STRING,
            allowNull: true
        },
        latitude: { // Широта
            type: DataTypes.DECIMAL(10, 8), // Подходит для координат
            allowNull: false
        },
        longitude: { // Долгота
            type: DataTypes.DECIMAL(11, 8), // Подходит для координат
            allowNull: false
        },
        support: {
            type: DataTypes.STRING,
            allowNull: true
        },
    });

    return Location;
};


