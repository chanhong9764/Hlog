import useConfig from 'hooks/useConfig';
import { Category } from '../@types/config';

export default function findCategory(pathname: string, categories: Category[]) {
  const category = categories.find((category) => category.href.split('/')[1] === pathname.split('/')[1]);
  if (category) {
    return category.id;
  }
  return 0;
}
