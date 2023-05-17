import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/configureStore';
import { configActions } from '../store/slice/configSlice';

// 커스텀 훅
export default function useConfig() {
  const { isDarkMode, isOpenMenu, isOpenSearch, categories } = useSelector((state: RootState) => state.config);
  const dispatch = useDispatch();

  const darkMode = useCallback(() => {
    dispatch(configActions.darkModeRequest());
  }, []);

  const openMenu = useCallback(() => {
    dispatch(configActions.openMenuRequest());
  }, []);

  const openSearch = useCallback(() => {
    dispatch(configActions.openSearchRequest());
  }, []);

  const getCategories = useCallback(() => {
    dispatch(configActions.categoryRequest());
  }, []);

  return {
    isDarkMode,
    isOpenMenu,
    isOpenSearch,
    darkMode,
    openMenu,
    openSearch,
    getCategories,
    categories,
  };
}
