import { ActionType } from 'typesafe-actions'
import * as actions from './actions'
import { ADD, CHANGE_FILTER, TOGGLE } from './constants'
import { combineReducers } from 'redux'
import { Todo, TodosFilter } from './models'

export type ITodosState = {
  readonly todos: Todo[]
  readonly todosFilter: TodosFilter
}

export type TodosAction = ActionType<typeof actions>

export default combineReducers<ITodosState, TodosAction>({
  todos: (state = [], action) => {
    switch (action.type) {
      case ADD:
        return [...state, action.payload]

      case TOGGLE:
        return state.map(
          item =>
            item.id === action.payload
              ? { ...item, completed: !item.completed }
              : item
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