const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Phrase extends Model {}

Phrase.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    phrase: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "phrase",
  }
);

module.exports = Phrase;
