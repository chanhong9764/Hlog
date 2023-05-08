import { useLocation } from 'react-router-dom';

interface Props {
  href: string;
}
export default function findCategory(href: string) {
  const location = useLocation();
  if (location.pathname.split('/')[1] === href.split('/')[1]) {
    return true;
  }
  return false;
}
