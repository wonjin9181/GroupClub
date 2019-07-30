module.exports = function (sequelize, DataTypes) {
  var Clubs = sequelize.define("clubs", {
    clubName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },

    clubMaker: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    clubDescription: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,100]
      }
    },
    clubLocation: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  Clubs.associate = function (models) {
    Clubs.hasMany(models.Post, {
      onDelete: "cascade"
    });
  }

  return Clubs;
};
