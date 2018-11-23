import { compose,  } from 'redux'

export const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE) ||
  compose