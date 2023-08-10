import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Habit } from './components/Habit'
import './styles/global.css'

function App() {
  return (
    <div>
      <Habit completed = {3}/>
      <Habit completed={2}/>
      <Habit  completed={1}/>
      <Habit completed={0}/>
    </div>
    )
  
}

export default App
