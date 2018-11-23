import { createSelector } from 'reselect'

import { ITodosState } from './reducer'

export const getTodos = (state: ITodosState) => state.todos

export const getTodosFilter = (state: ITodosState) => state.todosFilter

export const getFilteredTodos = createSelector(getTodos, getTodosFilter, (todos, todosFilter) => {
  switch (todosFilter) {
    case 'completed':
      return todos.filter(t => t.completed)
    case 'active':
      return todos.filter(t => !t.completed)

    default:
      return todos
  }
})