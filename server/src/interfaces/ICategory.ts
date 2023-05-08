export interface ICategory {
  id: number;
  name: string;
  href: string;
  class: number | undefined;
}

export interface ICategoryCreateDTO {
  name: string;
  href: string;
  class?: number;
}

export interface ICategoryUpdateDTO {
  name?: string;
  href?: string;
  class?: number;
}
