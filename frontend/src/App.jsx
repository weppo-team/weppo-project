import { AppProviders } from './context/AppProviders'
import { Boundary } from './Boundary'
import { Routing } from './Routing'
import { getResolution } from './lib/utlis'
import { TooSmallResolutionPage } from './components/TooSmallResolutionPage'

export const App = () => {
  const { height, width } = getResolution()

  if (width < 700 || height < 600) {
    return (
      <AppProviders>
        <TooSmallResolutionPage />
      </AppProviders>
    )
  }

  return (
    <AppProviders>
      <Boundary>
        <Routing />
      </Boundary>
    </AppProviders>
  )
}
