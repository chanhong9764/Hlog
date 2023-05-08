import React from 'react';
import theme from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import Header from 'components/Organisms/Header';
import Main from 'components/Organisms/Main';
import DarkModeButton from 'components/Atoms/DarkModeButton';
import useConfig from 'hooks/useConfig';

function App() {
  const { isDarkMode } = useConfig();

  return (
    <ThemeProvider theme={isDarkMode ? theme.darkTheme : theme.lightTheme}>
      <Header />
      <Main />
      <DarkModeButton />
    </ThemeProvider>
  );
}

export default App;
