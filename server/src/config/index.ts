import dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error(".env 파일을 찾을 수 없습니다.");
}

export default {
  port: process.env.PORT,
  corsConfig: {
    origin: "http://localhost:3000",
    credential: true,
  },
  dbConfig: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
  },
  jwtSecret: process.env.JWT_SECRET,
  jwtAlgorithm: process.env.JWT_ALGORITHM,
  api: {
    prefix: process.env.API_PREFIX,
  },
};
