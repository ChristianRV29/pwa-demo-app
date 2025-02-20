import { ThemeProvider } from "@emotion/react"
import type { PropsWithChildren } from "react"

import theme from './theme'

export const AppTheme = ({ children }: PropsWithChildren) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}