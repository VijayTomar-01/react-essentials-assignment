import React from 'react'

const Theme = ({darkTheme, setDarkTheme}) => {

  const handleTheme = () => {
    setDarkTheme(prev => !prev);
  }

  return (
    <div className={`flex flex-wrap justify-end items-center gap-12 mr-14 mt-4 font-semibold `}>
      <button
      className={`px-3.5 py-1.5 rounded-xl shadow-gray-500 shadow-md ${darkTheme ? 'bg-gray-100 text-gray-800' : 'bg-gray-800 text-gray-100'} transition-all duration-300 hover:scale-105`}
      onClick={handleTheme}>Toggle Theme</button>
      <p className='px-3.5 py-1.5'>{darkTheme ? '🌛 Dark Mode' : '🌞 Light Mode'}</p>
    </div>
  )
}

export default Theme