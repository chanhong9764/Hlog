export interface ICategory {
  id: number;
  name: string;
  href: string;
}

export interface ICategoryCreateDTO {
  name: string;
  href: string;
}

export interface ICategoryUpdateDTO {
  name?: string;
  href?: string;
}
