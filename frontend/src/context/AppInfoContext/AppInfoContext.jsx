import { createContext } from 'react'
import PropTypes from 'prop-types'

const appInfo = {
  title: 'Board Gamer',
  repoUrl: 'https://github.com/weppo-team/weppo-project',
}

export const AppInfoContext = createContext(appInfo)

export const AppInfoProvider = ({ children }) => (
  <AppInfoContext.Provider value={appInfo}>{children}</AppInfoContext.Provider>
)

AppInfoProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
