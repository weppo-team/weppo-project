import { Redirect, Route, Switch } from 'react-router-dom'
import { ViewsWrapper } from '../components/ViewsWrapper'
import { WelcomeView } from '../views/WelcomeView'
import { GamesView } from '../views/GamesView'
import { StatsView } from '../views/StatsView'
import { RoomsView } from '../views/RoomsView'
import { ProtectedRoute } from './ProtectedRoute'

export const Routing = () => (
  <ViewsWrapper>
    <Switch>
      <Route exact path="/">
        <WelcomeView />
      </Route>
      <ProtectedRoute
        component={GamesView}
        protectionLevel="guest"
        exact
        path="/games"
      />
      <ProtectedRoute
        component={StatsView}
        protectionLevel="user"
        exact
        path="/stats"
      />
      <ProtectedRoute
        component={RoomsView}
        protectionLevel="guest"
        exact
        path="/game/:gameName"
      />
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  </ViewsWrapper>
)
