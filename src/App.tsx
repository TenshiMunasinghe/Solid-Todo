import { Route, Routes } from 'solid-app-router'
import { Component } from 'solid-js'
import Home from './pages/Home'
import Watch from './pages/Watch'

export interface TodoType {
  id: string
  text: string
  completed: boolean
}

const App: Component = () => {
  return (
    <div class='max-w-5xl px-8 py-16 mx-auto'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/watch' element={<Watch />} />
      </Routes>
    </div>
  )
}

export default App
