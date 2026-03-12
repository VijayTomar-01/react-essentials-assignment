import { useState } from 'react'
import './App.css'
import Theme from './components/Theme/Theme';
import ExploreMovies from './components/Hollywood/ExploreMovies';

function App() {

  const [darkTheme, setDarkTheme] = useState(false);
  

  return (
    <>
      <div className={`min-h-screen pt-6 ${darkTheme ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-black text-gray-100' : 'bg-gradient-to-br from-sky-100 via-white to-violet-200'}`}>
        <div>
          <Theme
          setDarkTheme={setDarkTheme} 
          darkTheme={darkTheme}/>
        </div>
        <div>
          <ExploreMovies />
        </div>
      </div>
    </>
  )
}

export default App
