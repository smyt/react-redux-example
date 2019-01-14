import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension' // eslint-disable-line
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import rootSaga from './sagas'

export default function configureStore(initialState) {
  let middleware

  const sagaMiddleware = createSagaMiddleware()

  if (process.env.NODE_ENV === 'development') {
    const Logger = createLogger({
      duration: true,
    })
    middleware = composeWithDevTools(applyMiddleware(sagaMiddleware, Logger))
  } else {
    middleware = applyMiddleware(sagaMiddleware)
  }

  const store = createStore(
    reducers,
    initialState,
    middleware,
  )

  sagaMiddleware.run(rootSaga)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/index', () => {
      const nextRootReducer = require('./reducers/index') // eslint-disable-line
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
