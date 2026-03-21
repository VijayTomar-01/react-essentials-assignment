import React from 'react'
import { useThemeContext } from '../../context/ThemeContext';

const Theme = () => {

  const {darkTheme, toggleTheme} = useThemeContext();

  return (
    <div className='flex items-center justify-end p-8 gap-x-8 gap-y-1.5 font-light md:font-medium lg:font-semibold text-xs md:text-sm lg:text-md'>
        <button
        onClick={toggleTheme}
        className={`px-3.5 py-1.5 rounded-xl shadow-gray-600 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md  ${darkTheme ? 'bg-gray-100 text-gray-800' : 'bg-gray-800 text-gray-100'}`}>Toggle Theme</button>
        <p className=''>{darkTheme ? '🌛 Dark Mode' : '🌞 Light Mode'}</p>
    </div>
  )
}

export default Theme