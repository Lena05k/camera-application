module.exports = (sequelize, DataTypes) => {
    const Photo = sequelize.define("Photo", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        path: {
            type: DataTypes.STRING,
            allowNull: false
        },
        data: {
            type: DataTypes.BLOB
        }
    },
   {
       tableName: 'Photos',
   });

    return Photo;
};