import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  ForeignKey,
  CreationOptional,
  Sequelize,
} from "sequelize";
import { UserModel } from "./user";
import { CategoryModel } from "./category";

export class BoardModel extends Model<
  InferAttributes<BoardModel>,
  InferCreationAttributes<BoardModel>
> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare content: string;
  declare view: number;
  declare category_id: ForeignKey<CategoryModel["id"]>;
  declare user_id: ForeignKey<UserModel["id"]>;
  declare deletedAt: CreationOptional<Date>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

export default function (sequelize: Sequelize): typeof BoardModel {
  BoardModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      content: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      view: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      deletedAt: DataTypes.DATE,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: "board",
      modelName: "board",
      timestamps: true,
      paranoid: true,
      sequelize,
    }
  );

  return BoardModel;
}
