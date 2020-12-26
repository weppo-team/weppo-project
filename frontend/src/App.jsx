import { ThemeProvider } from 'styled-components'
import { theme } from './style/theme'
import { Routing } from './Routing'
import { AppInfoProvider } from './context/AppInfoContext'

export const App = () => (
  <ThemeProvider theme={theme}>
    <AppInfoProvider>
      <Routing />
    </AppInfoProvider>
  </ThemeProvider>
)
