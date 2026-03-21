import React, { useState } from 'react'
import { useTaskContext } from '../../context/TaskContext'
import { useThemeContext } from '../../context/ThemeContext';

const TaskItem = ({task}) => {
  
  const {darkTheme} = useThemeContext()
  const {editTask, toggleTask, deleteTask} = useTaskContext();
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({
    title: '',
    description: '',
    priority: '',
  })

  const handleEditing = () => {
    if(!editData.title.trim()){
      alert('Enter task title to save task');
      return
    }

    editTask(task.id, editData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditData({
      title: task.title,
      description: task.description,
      priority: task.priority
    })
    setIsEditing(false)
  }

  if(isEditing){
    return(
      <div className={`shadow-md shadow-gray-500 rounded-lg px-6 py-3 mb-6 border-none ${darkTheme && 'border-gray-300'}`}>
        <div className='flex flex-col'>
          <input
          className={`px-3 py-1.5 mb-3 text-xs w-[60%] rounded-lg shadow-sm shadow-gray-500 focus:outline-none focus:shadow-md focus:ring-2 transition duration-200 ${darkTheme ? 'focus:border-purple-500 focus:ring-purple-500/60' : 'focus:border-pink-600 focus:ring-pink-600/30'}`}
          value={editData.title}
          onChange={(e) => setEditData(prev => ({...prev, title: e.target.value}))} 
          type="text" placeholder='Task Title...' />
          <textarea
          className={`px-3 py-1.5 rounded-lg text-xs w-[90%] shadow-sm shadow-gray-500 focus:outline-none focus:shadow-md focus:ring-2 transition duration-200 ${darkTheme ? 'focus:border-purple-500 focus:ring-purple-500/60' : 'focus:border-pink-600 focus:ring-pink-600/30'} mb-4`}
          value={editData.description}
          onChange={(e) => setEditData(prev => ({...prev, description: e.target.value}))} 
          placeholder='Enter task description...' name="description" id="description" rows={4}></textarea>
        <select
        className= {`text-xs px-3 py-1.5 rounded-lg focus:outline-none focus:ring-2 ${darkTheme ? 'focus:border-purple-500 focus:ring-purple-500/60' : 'focus:border-pink-600 focus:ring-pink-600/30'} transition duration-200 shadow-gray-500 shadow-sm focus:shadow-md cursor-pointer`}
        value={editData.priority}
        onChange={(e) => setEditData(prev => ({...prev, priority: e.target.value}))} 
        name="priority" id="priority">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        </div>
        <div className='flex space-x-8 mt-6 ml-4'>
          <button
          className='shadow-sm shadow-gray-600 px-3 py-1 rounded-xl text-xs md:text-sm lg:text-md bg-yellow-300 text-gray-700 font-medium transition-all duration-300 hover:scale-105 hover:shadow-md' 
          onClick={handleEditing}>Save</button>
          <button
          className='shadow-sm shadow-gray-600 px-3 py-1 rounded-xl text-xs md:text-sm lg:text-md bg-yellow-300 text-gray-700 font-medium transition-all duration-300 hover:scale-105 hover:shadow-md' 
          onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    )
  }

  return (
    <div className={`rounded-lg  transition-all duration-300 hover:scale-105 shadow-lg shadow-gray-500  py-4 px-12 mb-8 ${task.completed ? 'bg-gray-300/70' : `${darkTheme ? 'bg-linear-to-br from-slate-900 via-slate-800 to-black border-gray-200/70 border' : 'bg-linear-to-br from-sky-50 via-white to-purple-100 border'}`}`}>
      <div className='flex justify-between'>
        <div>
          <h1 className={`font-medium md:font-semibold text-sm md:text-md lg:text-lg ${task.completed && 'line-through text-gray-600'} `}>{task.title}</h1>
        </div>
        <div className='p-2'>
          <span className={` px-3 py-1.5 rounded-md shadow-sm text-xs md:text-sm lg:text-md shadow-gray-500 ${task.completed && 'opacity-50'} 
          ${task.priority === 'high' 
          ? 'bg-red-500/80 text-gray-100 font-semibold' 
          : task.priority === 'medium' 
          ? 'bg-orange-500/80 text-gray-100 font-semibold'
          : 'bg-green-500/80 text-gray-100 font-semibold'}`}>{task.priority.toUpperCase()}</span>
        </div>
      </div>
      <h2 className={`font-light text-xs border-b border-gray-400 py-3 ${task.completed && 'line-through text-gray-600'}`}>  {task.description}</h2>
      <div className='mt-4'>
        <p className={`font-light text-xs ${task.completed && 'text-gray-600'}`}>Created: <span className='font-medium pl-3'>{new Date(task.createdAt).toLocaleDateString()}</span></p>
      </div>
      <div className='mt-4 flex flex-wrap gap-x-8 gap-y-2'>
        <button
        onClick={() => toggleTask(task.id)}
        className={`cursor-pointer transition-all duration-300 hover:scale-105 px-3 py-1 text-xs font-semibold shadow-sm shadow-gray-500 rounded-lg ${task.completed ? 'bg-green-600/90 text-gray-100' : 'bg-yellow-300 text-gray-700'}`}>{task.completed ? '✅ Completed' : '⏳ Pending'}</button>
        <button
        onClick={() => setIsEditing(true)}
        className={`px-3 py-1 text-xs transition-all duration-300 hover:scale-105 cursor-pointer  font-semibold shadow-sm shadow-gray-500 rounded-lg bg-gray-200 hover:bg-indigo-300`}>🖊️ Edit</button>
        <button
        className='px-3 py-1 text-xs transition-all duration-300 hover:scale-105 cursor-pointer  font-medium shadow-sm shadow-gray-500 rounded-lg bg-red-700/40 hover:bg-red-700/80 hover:text-gray-100'
        onClick={() => deleteTask(task.id)}>🗑️ Delete</button>
      </div>
    </div>
  )
}

export default TaskItem