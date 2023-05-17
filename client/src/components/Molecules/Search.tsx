import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Card from 'components/Atoms/CategoryCard';
import useConfig from 'hooks/useConfig';

function Search() {
  const { openSearch } = useConfig();
  return (
    <Card onClick={openSearch}>
      <AiOutlineSearch size={30} color="white" />
    </Card>
  );
}

export default Search;
