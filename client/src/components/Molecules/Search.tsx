import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import HeaderBox from 'components/Atoms/HeaderBox';
import useConfig from 'hooks/useConfig';

function Search() {
  const { openSearch } = useConfig();
  return (
    <HeaderBox onClick={openSearch}>
      <AiOutlineSearch size={30} color="white" />
    </HeaderBox>
  );
}

export default Search;
