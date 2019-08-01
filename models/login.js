module.exports = function (sequelize, DataTypes) {

    var Users = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5, 20]
            },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[8, 10]
            }
        }
        }
    })

    return Users

}
