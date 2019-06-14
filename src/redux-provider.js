import React from 'react'
import { Provider } from 'react-redux'

import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware, ConnectedRouter as RawConnectedRouter } from 'connected-react-router'

import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true
  }) : compose

const history = createBrowserHistory()

const middlewares = [
  routerMiddleware(history)
]

const store = createStore(
  combineReducers({
    ...rootReducer,
    router: connectRouter(history)
  }),
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
)

const ReduxProvider = (props) => (
  <Provider store={store}>
    { props.children }
  </Provider>
)

export default ReduxProvider

export const ConnectedRouter = (props) => (
  <RawConnectedRouter history={history}>
    { props.children }
  </RawConnectedRouter>
)
