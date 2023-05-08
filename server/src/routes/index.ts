import { Router } from "express";
import category from "./category";

export default () => {
  const app = Router();
  category(app);

  return app;
};
