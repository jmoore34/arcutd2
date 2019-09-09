import {DefaultTheme} from 'styled-components'

export const theme: DefaultTheme = {
    typography: {
        fonts: {
            title: '"Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
            body: '"Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
        },
        sizes: {
            h1: "32px",
            h2: "20px",
            body: "16px"
        }
    },
    color: {
        bg: {
            primary: "#ffffff",
            secondary: "#ccffd8"
        }
    },
    mediaQueries: {
        verticalLayout: "orientation: portrait",
        horizontalLayout: "orientation: landscape"
    }
};
