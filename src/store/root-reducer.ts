import { combineReducers } from 'redux'

import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { countersReducer } from '@/features/counters'

export const history = createBrowserHistory()

const createRootReducer = (h: any) => combineReducers({
  router: connectRouter(h),
  counters: countersReducer,
})

export default createRootReducer(history) // rootReducer
