import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useThemeContext } from './context/ThemeContext'
import TaskPage from './components/Pages/TaskPage'
import Theme from './components/Theme/Theme'

function App() {
  
  const {darkTheme} = useThemeContext()

  return (
    <>
      <div className={`min-h-screen pb-6 ${darkTheme ? 'bg-linear-to-br from-slate-800 via-slate-900 to-black text-gray-100' : 'bg-linear-to-br from-sky-50 via-white to-purple-100 text-gray-800'}`}>
        <Theme />
        <div>
          <TaskPage />
        </div>
      </div>
    </>
  )
}

export default App
