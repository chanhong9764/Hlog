import React from 'react';
import theme from 'styles/theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">React Hi</div>
    </ThemeProvider>
  );
}

export default App;
