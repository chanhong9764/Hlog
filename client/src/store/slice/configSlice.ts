import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category } from '../../@types/config';

export interface ConfigState {
  isDarkMode: boolean;
  isOpenMenu: boolean;
  isOpenSearch: boolean;
  categories: Array<Category>;
  isLoading: boolean;
}

const initialState: ConfigState = {
  isDarkMode: false,
  isOpenMenu: false,
  isOpenSearch: false,
  categories: [],
  isLoading: false,
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    // darkMode
    darkModeRequest(state: ConfigState) {
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    },
    // sideMenu
    openMenuRequest(state: ConfigState) {
      return {
        ...state,
        isOpenMenu: !state.isOpenMenu,
      };
    },
    // search
    openSearchRequest(state: ConfigState) {
      return {
        ...state,
        isOpenSearch: !state.isOpenSearch,
      };
    },

    // category
    categoryRequest(state: ConfigState) {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    categorySuccess(state: ConfigState, action: PayloadAction<Array<Category>>) {
      return {
        ...state,
        isLoading: false,
        categories: action.payload,
      };
    },
    categoryFailure(state: ConfigState, action: PayloadAction<{ error: string }>) {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    },
  },
});

export const configActions = configSlice.actions;
export default configSlice.reducer;
