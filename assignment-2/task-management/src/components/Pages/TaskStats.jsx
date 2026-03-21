import React from 'react'
import { useTaskContext } from '../../context/TaskContext'
import { useThemeContext } from '../../context/ThemeContext';

const TaskStats = () => {

  const {darkTheme} = useThemeContext()
  const {taskStats, clearTasks, tasks} = useTaskContext();
  return (
    <>
    <div className={`${darkTheme ? 'bg-linear-to-br from-slate-900 via-slate-800 to-black border border-gray-200/60' : 'bg-linear-to-br from-sky-50 via-white to-purple-100 border'} shadow-md shadow-gray-500 p-2 md:p-4 lg:p-6 grid grid-cols-1 min-[470px]:grid-cols-3 gap-y-2 gap-x-4 lg:gap-x-6  mt-5 rounded-lg`}>
        <div className='flex flex-col  text-center items-center bg-blue-700/80 px-4 py-2 rounded-md'>
          <p className='font-medium text-xs text-gray-100 [text-shadow:1px_2px_2px_rgba(0,0,0,0.5)]'>Total: </p>
          <span className='text-xl md:text-2xl lg:text-3xl pt-2 font-semibold text-gray-100 [text-shadow:1px_2px_2px_rgba(0,0,0,0.5)]'>{taskStats.totalTasks}</span>
        </div>
        <div className='flex flex-col text-center items-center bg-linear-to-br from-green-500 via-green-400 to-green-600 px-4 py-2 rounded-md'>
          <p className='font-medium text-xs text-gray-100 [text-shadow:1px_2px_2px_rgba(0,0,0,0.5)]'>Completed: </p>
          <span className='text-xl md:text-2xl lg:text-3xl pt-2 font-semibold text-gray-100 [text-shadow:1px_2px_2px_rgba(0,0,0,0.5)]'>{taskStats.completed}</span>
        </div>
        <div className='flex flex-col text-center items-center bg-linear-to-br from-amber-300 via-amber-400 to-amber-500 px-4 py-2 rounded-md'>
          <p className=' font-medium text-xs text-gray-100 [text-shadow:1px_2px_2px_rgba(0,0,0,0.5)]'>Pending: </p>
          <span className='text-xl md:text-2xl lg:text-3xl pt-2 font-semibold text-gray-100 [text-shadow:1px_2px_2px_rgba(0,0,0,0.5)]'>{taskStats.pending}</span>
        </div>
        </div> 
    </>
  )
}

export default TaskStats