import { param, body, check } from "express-validator";

// 카테고리 ID 유효성 체크
export const catgoryIdValidation = [
  param("id", "유효하지 않은 카테고리 ID입니다.")
    .trim()
    .exists({ values: "falsy" })
    .isNumeric(),
];

// 카테고리 DTO 유효성 체크
export const categoryDtoValidation = [
  body("name", "유효하지 않은 카테고리명입니다.")
    .trim()
    .exists({ values: "falsy" }),
  body("href", "유효하지 않은 카테고리 URL입니다.")
    .trim()
    .exists({ values: "falsy" }),
  check("class", "유효하지 않은 상위 카테고리 ID입니다.")
    .trim()
    .exists({ values: "falsy" })
    .isNumeric(),
];
