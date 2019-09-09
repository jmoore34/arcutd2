import 'styled-components'

// Extend the styled components type declarations to pass the theme easily
declare module 'styled-components' {
    export interface DefaultTheme {
        typography: {
            fonts: {
                title: string
                body: string
            },
            sizes: {
                h1: string
                h2: string
                body: string
            }
        }
        color: {
            bg: {
                primary: string
                secondary: string
            }
        },
        mediaQueries: {
            verticalLayout: string
        }
    }
}