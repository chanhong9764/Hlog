import React from 'react';
import theme from 'styles/theme';
import { ThemeProvider } from 'styled-components';

function App() {
  const darkMode = false;

  return (
    <ThemeProvider theme={darkMode ? theme.darkTheme : theme.lightTheme}>
      <div className="App">React Hi</div>
    </ThemeProvider>
  );
}

export default App;
