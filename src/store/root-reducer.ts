import { combineReducers } from 'redux'

import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { countersReducer } from '@/features/counters'

export const history = createBrowserHistory()



const createRootReducer = (h: any) => combineReducers({
  counters: countersReducer,
  router: connectRouter(h),
})
const rootReducer = createRootReducer(history)

export default rootReducer