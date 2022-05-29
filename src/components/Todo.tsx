import { TodoType } from '../App'

interface Props extends TodoType {
  toggleTodo: (id: string) => void
}

const Todo = (props: Props) => {
  return (
    <div>
      {props.text} {props.completed ? 'done' : 'not done'}
      <input
        type='checkbox'
        checked={props.completed}
        onchange={() => props.toggleTodo(props.id)}>
        Toggle
      </input>
    </div>
  )
}

export default Todo
