const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Hint extends Model {}

Hint.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    hint: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    word_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "word",
        key: "id",
      },
    },
    phrase_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "phrase",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "hint",
  }
);

module.exports = Hint;
