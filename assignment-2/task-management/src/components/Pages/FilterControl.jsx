import React from 'react'
import { useTaskContext } from '../../context/TaskContext';
import { useThemeContext } from '../../context/ThemeContext';

const FilterControl = () => {
  
  const {searchTerm, setSearch, filter, setFilter, undoAction, canUndo} = useTaskContext();
  const {darkTheme} = useThemeContext()

  const filterControl = ['all', 'completed', 'pending']

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const activeIndex = filterControl.indexOf(filter)
 
  return (
    <div>
      <div className='px-6'>
        <input
        className={`border border-gray-200 px-3 py-1.5 text-xs lg:text-sm rounded-lg w-[90%] md:w-[70%] lg:w-[80%] focus:outline-none focus:ring-2 ${darkTheme ? 'focus:border-purple-500  focus:ring-purple-500/60' : 'focus:border-pink-600 focus:ring-pink-600/30 '} transition-all duration-300 shadow-gray-500 shadow-sm focus:scale-[1.02 ] focus:shadow-md`}
        value={searchTerm} 
        onChange={handleSearch}
        type="text" placeholder='Search Tasks...'/>
      </div>

      <div className='flex justify-end '>
      <div className='flex flex-wrap text-xs items-center shadow-sm shadow-gray-500 justify-evenly mt-6 w-fit rounded-lg py-1 lg:py-2 px-6 lg:px-12 gap-x-2 lg:gap-x-5 gap-y-2 '>
          {filterControl.map(filterOption => (
            <button 
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={` w-fit px-1.5 lg:px-3 py-1 lg:py-1.5 border shadow-gray-500 shadow-sm rounded-lg font-medium cursor-pointer transition-all hover:scale-[1.02] duration-300 ${filter === filterOption && "text-white bg-[#667eea] shadow-md "}` }>{filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}</button>
          ))}
      </div>
      </div>
      <div className='pb-2 md:pb-4 lg:pb-6 flex justify-end items-center mt-2 lg:mt-4'>
        <button
        className={` px-2 lg:px-3 text-xs font-semibold py-1 lg:py-1.5 rounded-lg shadow-gray-500 shadow-xs transition-all duration-300 ${canUndo ? 'bg-[#667eea] text-gray-100 hover:scale-105 cursor-pointer' : 'bg-gray-200/80 text-gray-500 cursor-not-allowed'}`}
        disabled={!canUndo}
        onClick={undoAction}>Undo</button>
      </div>
    </div>
  )
}

export default FilterControl