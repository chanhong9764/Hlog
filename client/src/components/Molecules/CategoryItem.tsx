import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import findCategory from 'utils/findCategory';
import CategoryList from 'components/Atoms/CategoryList';
import useConfig from 'hooks/useConfig';
import { Category } from '../../@types/config';

interface IndexType {
  index: number;
}

export default function CategoryItem() {
  const { categories } = useConfig();
  const { pathname } = useLocation();
  const [currentIndex, setcurrentIndex] = useState(-1);
  const [index, setindex] = useState<number>(currentIndex);

  useEffect(() => {
    setcurrentIndex(findCategory(pathname, categories));
  }, [pathname]);

  return (
    <CategoryUlist index={index}>
      {categories &&
        categories.map((category: Category) => {
          return (
            <CategoryList key={category.id}>
              <CategoryLink
                to={category.href}
                className={category.id === currentIndex ? 'active' : ''}
                onMouseEnter={() => setindex(category.id)}
                onMouseLeave={() => setindex(currentIndex)}
              >
                <span>{category.name}</span>
              </CategoryLink>
            </CategoryList>
          );
        })}
      <CategoryIndicator index={currentIndex} />
    </CategoryUlist>
  );
}

const CategoryLink = styled(Link)`
  z-index: 200;
  width: 100%;
  height: 100px;
  padding: 8px 16px;
  display: table-cell;
  letter-spacing: 1px;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
  font-size: 18px;
  font-weight: 700;
  transition: color 0.35s ease-in-out;
  &:hover,
  &.active {
    color: white;
  }
`;

const CategoryIndicator = styled.div<IndexType>`
  position: absolute;
  right: 2px;
  top: ${(props) => (props.index - 1) * 100 + 8}px;
  width: 3px;
  height: 84px;
  background-color: white;
  border-radius: 5px;
  transition: 0.5s ease top;
`;

const CategoryUlist = styled.ul<IndexType>`
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  width: 100%;

  &:hover ${CategoryIndicator} {
    top: ${(props) => (props.index - 1) * 100 + 8}px;
  }
`;
