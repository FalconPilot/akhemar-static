import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Games from '../../static/games'

import GamePage from '../gamepage'
import ErrorView from '../errorview'

const GameRoute = ({ game, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      game
        ? <GamePage game={game} {...props} />
        : <ErrorView />
    )}
  />
)

const PageSwitch = props => (
  <Switch>
    <GameRoute
      path='/akhemar'
      game={Games.Akhemar}
    />
    <Route component={ErrorView} />
  </Switch>
)

export default PageSwitch
