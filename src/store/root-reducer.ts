import { combineReducers } from 'redux'

import { connectRouter } from 'connected-react-router'

import { countersReducer } from '../features/counters'

const rootReducer = (history: any) => combineReducers({
  counters: countersReducer,
  router: connectRouter(history),
})

export default rootReducer