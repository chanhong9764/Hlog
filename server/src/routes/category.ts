import { Router } from "express";
import * as CategoryController from "../controllers/category";
import asyncWrapper from "../middlewares/asyncWrapper";

export default (app: Router) => {
  app.get("/category", asyncWrapper(CategoryController.getCategories));
  app.get("/category/:id", asyncWrapper(CategoryController.getCategory));
  app.post("/category", asyncWrapper(CategoryController.createCategory));
  app.put("/category/:id", asyncWrapper(CategoryController.updateCategory));
  app.delete("/category/:id", asyncWrapper(CategoryController.deleteCategory));
};
