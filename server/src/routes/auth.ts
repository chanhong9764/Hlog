import { Router } from "express";

const route = Router();

export default (app: Router) => {
  app.use("/auth", route);

  route.post("/signup");
  route.post("/signin");
  route.post("/logout");
};
