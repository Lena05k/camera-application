module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        frist_name:{
            type: DataTypes.STRING,
            alloNull: false,
            validate: {
                notEmpty: true,
            },
        },
        last_name: {
            type: DataTypes.STRING,
            alloNull: false,
            validate: {
                notEmpty: true,
            },
        }
    });
    return User;
};