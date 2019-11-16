import React from 'react';
import {theme} from 'theme'
import {ThemeProvider as StyledComponentsThemeProvider} from 'styled-components'
import {createMuiTheme, ThemeProvider as MuiThemeProvider} from "@material-ui/core/styles"
import {Home} from 'homepage/Home'
import {Normalize} from "styled-normalize";
import {green, purple} from "@material-ui/core/colors";

const muiTheme = createMuiTheme({
    palette: {
        primary: green,
        secondary: purple
    }
});


function App() {
  return (
      <>
        <Normalize />
        <StyledComponentsThemeProvider theme={theme}>
            <MuiThemeProvider theme={muiTheme}>
                <Home />
            </MuiThemeProvider>
        </StyledComponentsThemeProvider>
      </>
  );
}

export default App;
