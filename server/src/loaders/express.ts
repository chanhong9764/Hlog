import config from "../config";
import express, { Application } from "express";
import cors from "cors";
import routes from "../routes";
import errorHandler from "../middlewares/errorHandler";

export default async ({ app }: { app: Application }) => {
  // cors 설정
  app.use(cors(config.corsConfig));
  // Express 업데이트 이후 따로 body-parser 설치 불필요
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  // 라우팅
  app.use(config.api.prefix!, routes());

  // 페이지 NOT FOUND 핸들링
  app.use(function (req, res, next) {
    res.status(404).send("유효하지 않은 URL의 요청입니다.");
  });

  // 에러 핸들링
  app.use(errorHandler);

  return app;
};
