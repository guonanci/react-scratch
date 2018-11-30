import { combineReducers } from 'redux'
import { ActionType } from 'typesafe-actions'
import { List } from 'immutable'
import * as actions from './actions'
import { ITodo, TodosFilter } from './models'
import { ADD, CHANGE_FILTER, TOGGLE } from './constants'

export type ITodosState = {
  readonly todos: List<ITodo>
  readonly todosFilter: TodosFilter
}

export type TodosAction = ActionType<typeof actions>

export default combineReducers<ITodosState, TodosAction>({
  todos: (state = List([]), action) => {
    switch (action.type) {
      case ADD:
        return state.push(action.payload)

      case TOGGLE:
        return state.map((item: ITodo) => {
            debugger
            if (item.get('id') === action.payload) {
              return item.update('completed', (completed: any) => !completed)
            } else {
              return item
            }
          }
        )
      default:
        return state
    }
  },
  todosFilter: (state = TodosFilter.All, action) => {
    switch (action.type) {
      case CHANGE_FILTER:
        return action.payload
      default:
        return state
    }
  },
})