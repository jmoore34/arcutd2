import React from 'react';
import {theme} from 'theme'
import {ThemeProvider} from 'styled-components'
import {Home} from 'homepage/Home'
import {Normalize} from "styled-normalize";

function App() {
  return (
      <>
        <Normalize />
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </>
  );
}

export default App;
