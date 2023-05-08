import {
  ICategory,
  ICategoryCreateDTO,
  ICategoryUpdateDTO,
} from "../interfaces/ICategory";
import { DB } from "../loaders/mysql";
import HttpException from "../models/HttpException";

export async function getCategory(
  categoryId: string
): Promise<{ category: ICategory }> {
  const category = await DB.category.findOne({ where: { id: categoryId } });
  if (!category) {
    throw new HttpException(500, "카테고리 정보가 존재하지 않습니다.");
  }
  return { category };
}

export async function getCategories(): Promise<{
  categories: ICategory[];
}> {
  const categories = await DB.category.findAll();
  if (!categories) {
    throw new HttpException(500, "카테고리 정보가 존재하지 않습니다.");
  }
  return { categories };
}

export async function createCategory(ICategoryCreateDTO: ICategoryCreateDTO) {
  const category = await DB.category.create({
    ...ICategoryCreateDTO,
  });
  if (!category) {
    throw new HttpException(500, "카테고리가 생성되지 않았습니다.");
  }
  return { category };
}

export async function deleteCategory(categoryId: string) {
  const numOfCategory = await DB.category.destroy({
    where: { id: categoryId },
  });
  if (!numOfCategory) {
    throw new HttpException(500, "카테고리가 삭제되지 않았습니다.");
  }
}

export async function updateCategory(
  categoryId: string,
  ICategoryUpdateDTO: ICategoryUpdateDTO
) {
  const numOfCategory = await DB.category.update(ICategoryUpdateDTO, {
    where: { id: categoryId },
  });
  if (!numOfCategory) {
    throw new HttpException(500, "카테고리가 수정되지 않았습니다.");
  }
}
