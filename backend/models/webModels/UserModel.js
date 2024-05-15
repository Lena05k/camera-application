module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        snils: {
            type: DataTypes.STRING,
            allowNull: false, // Сделать false, если СНИЛС обязателен
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false, // Сделать false, если должность обязательна
        },
    });

    return User;
};
