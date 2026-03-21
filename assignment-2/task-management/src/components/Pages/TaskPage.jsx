import React from 'react'
import Header from './Header'
import TaskForm from './TaskForm'
import FilterControl from './FilterControl'
import TaskList from './TaskList'
import { useThemeContext } from '../../context/ThemeContext'
import { useTaskContext } from '../../context/TaskContext'
import {motion} from 'framer-motion';
import TaskStats from './TaskStats'

const TaskPage = () => {

  const {darkTheme} = useThemeContext()
  const {taskStats, clearTasks, tasks} = useTaskContext()

  return (
    <div>
      <Header />
    <div className='mt-12 grid grid-cols-1 lg:grid-cols-5 gap-y-8 px-12 gap-x-6 '>
      <motion.div
      initial={{opacity:0,y:40,scale:0.95}}
      animate={{opacity:1,y:0,scale:1}}
      transition={{duration:0.5}} 
      className='col-span-2 w-full max-w-lg mx-auto'>
        <TaskForm />
      </motion.div>
      <motion.div 
      initial={{opacity:0,y:40,scale:0.95}}
      animate={{opacity:1,y:0,scale:1}}
      transition={{duration:0.5,delay:0.2}} 
      className={`col-span-3 max-w-2xl w-full mx-auto items-center pt-3 px-10 bg-gray-100 shadow-lg shadow-gray-600 rounded-xl ${darkTheme ? 'bg-linear-to-br from-slate-900 via-slate-800 to-black border' : 'bg-linear-to-br from-sky-50 via-white to-purple-100 border'}`}> 
        <h1 className='w-fit mx-auto px-6 py-1.5 bg-linear-to-br from-[#667eea] to-[#764ba2] rounded-lg mb-2 text-gray-100 font-medium text-sm md:text-md [text-shadow:1px_1px_2px_rgba(0,0,0,0.7)]'>Task Overview</h1>
        <div className={`shadow-md shadow-gray-500 p-6 rounded-lg ${darkTheme ? 'bg-linear-to-br from-slate-900 via-slate-800 to-black border border-gray-200/60' : 'bg-linear-to-br from-sky-50 via-white to-purple-100 border'}`}>
          <FilterControl />
        </div>
        <TaskStats/> 
        <div className='flex items-center justify-end mt-4 mb-4'>
          <button
          disabled={tasks.length === 0}
          onClick={() => {
          if(confirm("Are you sure you want to delete all tasks?")){
            clearTasks();
          }
        }}
          className={`px-3 py-1.5 shadow-sm transition-all rounded-xl shadow-gray-500 duration-300 ${tasks.length === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-linear-to-br from-[#667eea] to-[#764ba2] cursor-pointer text-gray-100 hover:scale-105 hover:shadow-md'}`}>Clear Tasks</button>
        </div>
        </motion.div>
        </div>
        <div className=' '>
            <TaskList />
        </div>
    </div>
  )
}

export default TaskPage