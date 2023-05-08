import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  CreationOptional,
  Sequelize,
} from "sequelize";

export class CategoryModel extends Model<
  InferAttributes<CategoryModel>,
  InferCreationAttributes<CategoryModel>
> {
  toObject() {
    throw new Error("Method not implemented.");
  }
  declare id: CreationOptional<number>;
  declare name: string;
  declare href: string;
  declare class: number | undefined;
  declare deletedAt: CreationOptional<Date>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

export default function (sequelize: Sequelize): typeof CategoryModel {
  CategoryModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      href: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
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
      tableName: "category",
      modelName: "category",
      timestamps: true,
      paranoid: true,
      sequelize,
    }
  );

  return CategoryModel;
}
