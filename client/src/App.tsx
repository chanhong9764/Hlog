import React, { useState } from 'react';
import theme from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import Header from 'components/Organisms/Header';
import SideMenu from 'components/Organisms/SideMenu';
import Main from 'components/Organisms/Main';
import DarkModeButton from 'components/Atoms/DarkModeButton';
import useConfig from 'hooks/useConfig';

function App() {
  const { isDarkMode } = useConfig();
  // 카테고리 첫 클릭 여부
  const [isOpen, setisOpen] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? theme.darkTheme : theme.lightTheme}>
      <SideMenu isOpen={isOpen} />
      <Header isOpen={isOpen} setisOpen={setisOpen} />
      <Main />
      <DarkModeButton />
    </ThemeProvider>
  );
}

export default App;
