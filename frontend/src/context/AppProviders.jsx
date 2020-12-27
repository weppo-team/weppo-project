import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import { theme } from '../style/theme'

export const AppProviders = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
}
