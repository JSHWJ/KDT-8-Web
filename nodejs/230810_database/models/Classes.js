const { DataTypes } = require("sequealize");

const classModel = (sequealize) => {
  const Classes = sequealize.define("classes", {
    classes: {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        ptimrayKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(31),
        allowNull: false,
      },
      room: {
        type: DataTypes.STRING(7),
      },
      code: {
        type: DataTypes.STRING(15),
      },
      code: {
        type: DataTypes.STRING(15),
      },
    },
  });
};
