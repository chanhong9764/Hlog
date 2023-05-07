export interface ICategory {
  id: number;
  name: string;
  href: string;
  class: number;
}

export interface ICategoryInputDTO {
  name: string;
  href: string;
  class: number;
}
