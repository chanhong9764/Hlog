import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  CreationOptional,
  ForeignKey,
  Sequelize,
} from "sequelize";
import { UserModel } from "./user";
import { BoardModel } from "./board";

export class ReplyModel extends Model<
  InferAttributes<ReplyModel>,
  InferCreationAttributes<ReplyModel>
> {
  declare id: CreationOptional<number>;
  declare content: string;
  declare class: number;
  declare board_id: ForeignKey<BoardModel["id"]>;
  declare user_id: ForeignKey<UserModel["id"]>;
  declare deletedAt: CreationOptional<Date>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

export default function (sequelize: Sequelize): typeof ReplyModel {
  ReplyModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      content: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      class: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      deletedAt: DataTypes.DATE,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: "reply",
      modelName: "reply",
      timestamps: true,
      paranoid: true,
      sequelize,
    }
  );

  return ReplyModel;
}
