import React from 'react'
import { useTaskContext } from '../../context/TaskContext'
import TaskItem from './TaskItem'
import { useThemeContext } from '../../context/ThemeContext'
import { AnimatePresence, motion } from 'framer-motion'

const TaskList = () => {

  const { tasks } = useTaskContext()
  const {darkTheme} = useThemeContext();

  return (
    <div>
      {tasks.length === 0 ? (
        <div className='text-center pt-6 md:pt-10 lg:pt-14 '>
          <h3 className='font-semibold text-lg md:text-xl lg:text-2xl pb-2 md:pb-4 lg:pb-6'>You're all caught up!</h3>
          <p className='font-medium text-sm md:text-md lg:text:lg pb-6'>Looks like there are no tasks here. Add a new task to get started.</p>
        </div>
      ) : (
        <AnimatePresence>
          <h1 className='bg-linear-to-br from-[#667eea] to-[#764ba2] text-center py-4 rounded-lg mb-3 text-lg font-semibold text-gray-100 w-[90%] mx-auto mt-8 shadow-md shadow-gray-500 [text-shadow:1px_2px_2px_rgba(0,0,0,0.7)]'>Your Tasks</h1>
          <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 px-12 md:px-6 lg:px-8'>
            {tasks.map(task => (
            <motion.div
            className=''
            key={task.id}
            initial={{opacity:0,y:20,scale:0.95}}
            animate={{opacity:1,y:0,scale:1}}
            transition={{duration:0.3,delay:0.2}}>
              <TaskItem task={task}/>
            </motion.div>
            ))}
          </div>
        </AnimatePresence>
      )}
    </div>
  )
}

export default TaskList