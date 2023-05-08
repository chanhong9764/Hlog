import { Request, Response, NextFunction } from "express";
import * as CategoryService from "../services/category";
import {
  ICategoryCreateDTO,
  ICategoryUpdateDTO,
} from "../interfaces/ICategory";

export async function getCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const { category } = await CategoryService.getCategory(id);

  return res.status(200).json(category);
}

export async function getCategories(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { categories } = await CategoryService.getCategories();
  return res.status(200).json(categories);
}

export async function createCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { category } = await CategoryService.createCategory(
    req.body as ICategoryCreateDTO
  );
  return res.status(201).json(category);
}

export async function deleteCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  await CategoryService.deleteCategory(id);
  return res.status(204).end();
}

export async function updateCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  await CategoryService.updateCategory(id, req.body as ICategoryUpdateDTO);
  return res.status(200).end();
}
