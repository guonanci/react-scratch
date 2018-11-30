import { combineReducers } from 'redux'

import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { countersReducer } from '@/features/counters'
import { todosReducer } from '@/features/todos-immutable'

export const history = createBrowserHistory()

const createRootReducer = (h: any) => combineReducers({
  router: connectRouter(h),
  counters: countersReducer,
  todos: todosReducer,
})

export default createRootReducer(history) // rootReducer
