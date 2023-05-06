import config from "../config";
import express, { Application } from "express";
import cors from "cors";
import routes from "../routes";

export default async ({ app }: { app: Application }) => {
  // cors 설정
  app.use(cors(config.corsConfig));
  // Express 업데이트 이후 따로 body-parser 설치 불필요
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  // 라우팅
  app.use(config.api.prefix!, routes());

  return app;
};
