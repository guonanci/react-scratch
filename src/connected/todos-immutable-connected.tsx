import Types from 'Types'

import { connect,  } from 'react-redux'

import { Todos } from '@/components'
import { todosActions, todosSelectors } from '@/features/todos-immutable'

const mapStateToProps = (state: Types.RootState) => ({
  todos: todosSelectors.getTodos(state.todos),
})

export const TodosImmutableConnected = connect(mapStateToProps, {
  addTodo: todosActions.add,
  toggleTodo: todosActions.toggle,
})(Todos)