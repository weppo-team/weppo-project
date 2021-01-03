import { Route, Switch } from 'react-router-dom'
import { ViewsWrapper } from '../components/ViewsWrapper'
import { WelcomeView } from '../views/WelcomeView'
import { GamesView } from '../views/GamesView'
import { StatsView } from '../views/StatsView'
import { RoomsView } from '../views/RoomsView'

export const Routing = () => (
  <Switch>
    <ViewsWrapper>
      <Route exact path="/">
        <WelcomeView />
      </Route>
      <Route exact path="/games">
        <GamesView />
      </Route>
      <Route exact path="/stats">
        <StatsView />
      </Route>
      <Route exact path="/game/:gameName">
        <RoomsView />
      </Route>
    </ViewsWrapper>
  </Switch>
)
