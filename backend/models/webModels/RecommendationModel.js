module.exports = (sequelize, DataTypes) => {
    const Recommendation = sequelize.define("Recommendation", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false // Установите false, если поле должно быть обязательным
        }
    });

    return Recommendation;
};
