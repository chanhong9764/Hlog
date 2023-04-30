import React from 'react';
import theme from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import Header from 'components/Organisms/Header';

function App() {
  const darkMode = false;

  return (
    <ThemeProvider theme={darkMode ? theme.darkTheme : theme.lightTheme}>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
