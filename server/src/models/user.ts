import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  CreationOptional,
  Sequelize,
} from "sequelize";

export class UserModel extends Model<
  InferAttributes<UserModel>,
  InferCreationAttributes<UserModel>
> {
  declare id: CreationOptional<number>;
  declare email: string;
  declare nickname: string;
  declare auth: number;
  declare deletedAt: CreationOptional<Date>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

export default function (sequelize: Sequelize): typeof UserModel {
  UserModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      nickname: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      auth: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      deletedAt: DataTypes.DATE,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: "user",
      modelName: "user",
      timestamps: true,
      paranoid: true,
      sequelize,
    }
  );

  return UserModel;
}
