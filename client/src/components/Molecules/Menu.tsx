import React from 'react';
import { CgMenu } from 'react-icons/cg';
import Card from 'components/Atoms/CategoryCard';
import useConfig from 'hooks/useConfig';

interface Props {
  isOpen: boolean;
  setisOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menu({ isOpen, setisOpen }: Props) {
  const { openMenu } = useConfig();

  const onClickMenu = () => {
    openMenu();
    if (!isOpen) {
      setisOpen(true);
    }
  };

  return (
    <Card onClick={onClickMenu}>
      <CgMenu size={30} color="white" />
    </Card>
  );
}

export default Menu;
