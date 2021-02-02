import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import { theme } from '../style/theme'
import { SelectedGameProvider } from './SelectedGameContext'

export const AppProviders = ({ children }) => (
  <ThemeProvider theme={theme}>
    <SelectedGameProvider>{children}</SelectedGameProvider>
  </ThemeProvider>
)

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
}
