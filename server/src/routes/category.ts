import { Router } from "express";
import * as CategoryController from "../controllers/category";
import asyncWrapper from "../middlewares/asyncWrapper";
import validatorChecker from "../middlewares/validatorChecker";
import * as validator from "../middlewares/validator";

export default (app: Router) => {
  app.get("/category", asyncWrapper(CategoryController.getCategories));
  app.get(
    "/category/:id",
    validator.catgoryIdValidation,
    validatorChecker,
    asyncWrapper(CategoryController.getCategory)
  );
  app.post(
    "/category",
    validator.categoryDtoValidation,
    validatorChecker,
    asyncWrapper(CategoryController.createCategory)
  );
  app.put(
    "/category/:id",
    validator.catgoryIdValidation,
    validatorChecker,
    asyncWrapper(CategoryController.updateCategory)
  );
  app.delete(
    "/category/:id",
    validator.catgoryIdValidation,
    validatorChecker,
    asyncWrapper(CategoryController.deleteCategory)
  );
};
