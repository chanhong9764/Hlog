import config from "../config";
import { Sequelize } from "sequelize";
import User from "../models/user";
import Board from "../models/board";
import Reply from "../models/reply";
import Category from "../models/category";

// DB 연결
const sequelize = new Sequelize(
  config.dbConfig.database!,
  config.dbConfig.username!,
  config.dbConfig.password!,
  {
    host: config.dbConfig.host!,
    dialect: "mysql",
    define: {
      // 테이블 복수형 금지
      freezeTableName: true,
      // 한국어 사용
      charset: "utf8",
      collate: "utf8_general_ci",
      underscored: true,
    },
  }
);

// 모델 생성
export const DB = {
  sequelize,
  user: User(sequelize),
  board: Board(sequelize),
  reply: Reply(sequelize),
  category: Category(sequelize),
};

// 모델 관계 정의
DB.board.belongsTo(DB.user, { onDelete: "cascade" });
DB.board.belongsTo(DB.category, { onDelete: "cascade" });
DB.reply.belongsTo(DB.user, { onDelete: "cascade" });
DB.reply.belongsTo(DB.board, { onDelete: "cascade" });

// DB 동기화
export default async () => {
  DB.sequelize.sync({ force: false });
};
