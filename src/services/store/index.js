import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'

import reducer from '../reducer'
import Saga from './saga'

export default function createStoreWithMiddleware(history) {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware
  )
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    reducer,
    composeEnhancers(middleware)
  )
  sagaMiddleware.run(Saga)
  return store
}