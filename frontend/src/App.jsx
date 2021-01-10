import { AppProviders } from './context/AppProviders'
import { Boundary } from './Boundary'
import { Routing } from './Routing'

export const App = () => (
  <AppProviders>
    <Boundary>
      <Routing />
    </Boundary>
  </AppProviders>
)
