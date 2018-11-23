import { applyMiddleware, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware,  } from 'connected-react-router'
import { createEpicMiddleware,  } from 'redux-observable'
import { composeEnhancers,  } from './utils'
import rootEpic from './root-epic'
import createRootReducer from './root-reducer'
import services from '../services'

const history = createBrowserHistory()
export const epicMiddleware = createEpicMiddleware({
  dependencies: services,
})

function configureStore(initialState?: object) {
  // configure middlewares
  const middlewares = [epicMiddleware, routerMiddleware(history)]
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares))
  // create store
  return createStore(createRootReducer(history), initialState!, enhancer)
}

// pass an optional param to rehydrate state on app start
const store = configureStore()
// export store singleton instance

epicMiddleware.run(rootEpic)

export default store

