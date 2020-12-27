import { Route, Switch } from 'react-router-dom'
import { ViewsWrapper } from '../components/ViewsWrapper/ViewsWrapper'
import { WelcomeView } from '../views/WelcomeView'
import { GamesView } from '../views/GamesView'
import { StatsView } from '../views/StatsView'

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
    </ViewsWrapper>
  </Switch>
)
