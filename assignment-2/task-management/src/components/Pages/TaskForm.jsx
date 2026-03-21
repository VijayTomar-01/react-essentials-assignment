import React, { useState } from 'react'
import { useTaskContext } from '../../context/TaskContext';
import { useThemeContext } from '../../context/ThemeContext';


const TaskForm = () => {

  const {addTask} = useTaskContext();
  const {darkTheme} = useThemeContext()

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name] : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!formData.title.trim()) return;

    addTask(formData);
    setFormData({title: '', description: '', priority: ''})
  }
  
  return (
    <form 
    className={`rounded-xl px-12 pt-4 shadow-md transition-all duration-300 shadow-gray-500 hover:scale-[1.02] hover:shadow-lg ${darkTheme ? 'bg-linear-to-br from-slate-900 via-slate-800 to-black border-gray-500 border ' : 'bg-linear-to-br from-indigo-50 via-white to-purple-100 border'}`}
    onSubmit={handleSubmit}>
      <div className='bg-linear-to-br from-[#667eea] to-[#764ba2] shadow-md shadow-gray-500 py-4 rounded-lg  text-gray-100'>
        <h1 className='font-medium lg:font-semibold text-md md:text-lg lg:text-xl text-center [text-shadow:0_1px_2px_rgba(0,0,0,0.7)] '>Add New Task</h1>
      </div>
      <div className='flex flex-col gap-y-1 md:gap-y-1.5 lg:gap-y-2.5 my-8'>
        <label className='text-sm md:text-md lg:text-[1rem] font-medium' htmlFor="title">Title</label>
        <input 
        className={` px-3 py-1.5 border text-sm border-gray-200 rounded-lg focus:outline-none focus:ring-2  transition duration-200 shadow-gray-500 shadow-sm focus:shadow-md ${darkTheme ? 'focus:border-purple-500 focus:ring-purple-500/60' : 'focus:border-pink-600 focus:ring-pink-600/30'}`}
        value={formData.title}
        onChange={handleChange}
        type="text" name="title" id="title" placeholder='Enter the Title...' />
      </div>

      <div className='flex flex-col gap-y-1 md:gap-y-1.5 lg:gap-y-2.5'>
        <label className='text-sm md:text-md lg:text-[1rem] font-medium' htmlFor="description">Description</label>
        <textarea 
        className={`px-3 border border-gray-200 py-1.5 rounded-lg text-sm lg:text-md  focus:outline-none focus:ring-2  transition duration-200 shadow-gray-500 shadow-sm focus:shadow-md ${darkTheme ? 'focus:border-purple-500 focus:ring-purple-500/60' : 'focus:border-pink-600 focus:ring-pink-600/30'}`}
        value={formData.description}
        onChange={handleChange}
        type="text" name="description" id="description" placeholder='Enter the Description... ' rows={4} />
      </div>

      <div className='flex flex-col gap-y-1 md:gap-y-1.5 lg:gap-y-2.5 mt-8'>
        <label className='text-sm md:text-md lg:text-[1rem] font-medium ' htmlFor="priority">Priority</label>
        <select 
        className={`border border-gray-200 text-sm lg:text-md px-3 py-1 rounded-lg focus:outline-none focus:ring-2  transition duration-200 shadow-gray-500 shadow-sm focus:shadow-md cursor-pointer ${darkTheme ? 'focus:border-purple-500 focus:ring-purple-500/60' : 'focus:border-pink-600 focus:ring-pink-600/30'}`}
        value={formData.priority}
        onChange={handleChange}
        name="priority" id="priority">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <div className='text-center my-3 '>
        <button
          style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}}
          className={`px-3 lg:px-6 py-1 lg:py-1.5 rounded-2xl mt-4 text-gray-100 font-semibold text-md lg:text-lg shadow-sm shadow-gray-600 transition-all duration-300   mb-4 ${formData.title.trim() ? 'cursor-pointer bg-[#667eea]/90 hover:bg-linear-to-br from-[#667eea] to-[#764ba2] hover:scale-105 hover:shadow-md' : 'bg-[#667eea]/50 cursor-not-allowed'}`}
          type='submit' disabled={!formData.title.trim()}>Add Task</button>
      </div>
    </form>
  )
}

export default TaskForm