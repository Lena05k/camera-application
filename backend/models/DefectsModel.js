module.exports = (sequelize, DataTypes) => {
    const Defects = sequelize.define("Defects", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING, // Название типа дефекта
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT, // Описание дефекта
            allowNull: true
        },
        severity: {
            type: DataTypes.STRING, // Уровень серьезности: Низкий, Средний, Высокий
            allowNull: true
        },
        measuredValue: {
            type: DataTypes.FLOAT, // Измеренное значение, если применимо
            allowNull: true
        }
    });

    return Defects;
};
