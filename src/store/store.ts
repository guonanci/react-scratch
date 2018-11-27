import { applyMiddleware, createStore } from 'redux'

import { routerMiddleware,  } from 'connected-react-router'
import { createEpicMiddleware,  } from 'redux-observable'
import { composeEnhancers,  } from './utils'
import rootEpic from './root-epic'
import rootReducer, { history } from './root-reducer'
import services from '../services'

export const epicMiddleware = createEpicMiddleware({
  dependencies: services,
})

function configureStore (initialState?: object) {
  // configure middlewares
  const middlewares = [epicMiddleware, routerMiddleware(history)]
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares))
  // create store
  return createStore(rootReducer, initialState!, enhancer)
}

// pass an optional param to rehydrate state on app start
const store = configureStore()

epicMiddleware.run(rootEpic)

// export store singleton instance
export default store
