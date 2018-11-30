import * as React from 'react'
import { Input,  } from 'antd'
import { List } from 'immutable'
import { ITodo } from '@/features/todos-immutable/models'
import './index.scss'
interface ITodoProps {
  todo: {
    completed: boolean,
    title: string
    id: string
  }
}
const Todo: React.FunctionComponent<ITodoProps> = (props) => {
  const { todo } = props;

  if (todo.completed) {
    return <span className='strike'>{todo.title}</span>;
  } else {
    return <span>{todo.title}</span>;
  }
}


interface ITodosProps {
  todos: List<ITodo>
  toggleTodo: (id: string) => any
  addTodo: (title: string) => any
}

export class Todos extends React.Component<ITodosProps, {}> {
  constructor (props: any) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.toggleClick = this.toggleClick.bind(this)
  }
  onSubmit (event: React.KeyboardEvent<HTMLInputElement>) {
    const { addTodo } = this.props
    const input = event.currentTarget
    const text = input.value
    const isEnterKey = (event.which === 13)
    const isLongEnough = text.length > 0

    if (isEnterKey && isLongEnough) {
      input.value = ''
      addTodo(text)
    }
  }
  toggleClick (event: React.MouseEvent<HTMLElement>, id: string) {
    debugger
    this.props.toggleTodo(id)
  }
  render () {
    const { onSubmit, toggleClick, props } = this
    const { todos } = props
    return (
      <div className='todo'>
        <Input
          type='text'
          className='todoEntry'
          placeholder='Add todo'
          onKeyDown={onSubmit}
        />
        <ul className='todoList'>
          {todos.map((t: any) => (
            <li
              key={t.get('id')}
              className='todoItem'
              onClick={(event) => toggleClick(event, t.get('id'))}
            >
              <Todo todo={t.toJS()} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}