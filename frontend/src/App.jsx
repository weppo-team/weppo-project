import { ThemeProvider } from 'styled-components'
import { theme } from './style/theme'

export const App = () => (
  <ThemeProvider theme={theme}>
    <h1>Hello world</h1>
  </ThemeProvider>
)
