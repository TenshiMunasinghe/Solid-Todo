import { Component, For } from 'solid-js'
import { createStore } from 'solid-js/store'
import { v4 } from 'uuid'

export interface TodoType {
  id: string
  text: string
  completed: boolean
}

const App: Component = () => {
  const [todos, setTodos] = createStore<TodoType[]>([])

  const addTodo = (
    e: Event & {
      submitter: HTMLElement
    } & {
      currentTarget: HTMLFormElement
      target: Element
    }
  ) => {
    e.preventDefault()
    const text = e.currentTarget.todoText.value as string
    if (!text) return
    setTodos(prev => [...prev, { id: v4(), text, completed: false }])
    e.currentTarget.todoText.value = ''
  }

  const toggleTodo = (id: string) => {
    const idx = todos.findIndex(item => item.id === id)
    if (idx === undefined) return
    const todo = todos[idx]
    setTodos(idx, 'completed', !todo.completed)
  }

  return (
    <div class='max-w-5xl px-8 py-16 mx-auto flex flex-col space-y-12'>
      <form onsubmit={addTodo} class='space-x-1'>
        <input
          class='bg-zinc-100 h-full max-w-xs px-3'
          name='todoText'
          placeholder='add todo'
        />
        <button class='bg-zinc-200 py-1 px-3' type='submit'>
          Add
        </button>
      </form>
      <main class='space-y-6'>
        <For each={todos}>
          {item => {
            console.log('created ' + item.text)

            return (
              <div class='bg-zinc-100 flex space-x-4 p-3 rounded-sm'>
                <div
                  class='flex-1'
                  classList={{ 'line-through': item.completed }}>
                  {item.text}
                </div>
                <div>{item.completed ? '' : 'Not '}Done</div>
                <input
                  type='checkbox'
                  checked={item.completed}
                  onchange={() => toggleTodo(item.id)}>
                  Toggle
                </input>
              </div>
            )
          }}
        </For>
      </main>
    </div>
  )
}

export default App
