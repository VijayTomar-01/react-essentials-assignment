import React from 'react'

const Header = () => {
  return (
    <div className='bg-linear-to-br from-[#667eea] to-[#764ba2] py-1.5 md:py-3 lg:py-6 text-center shadow-md shadow-gray-500 text-gray-100'>
      <h1
      style={{textShadow: '2px 4px 6px rgba(0,0,0,0.7)'}} 
      className='font-medium md:text-semibold lg:font-bold text-lg md:text-xl lg:text-2xl pb-1.5 md:pb-2 lg:pb-3'>Task Manager</h1>
      <p
      style={{textShadow: '2px 4px 6px rgba(0,0,0,0.7)'}}  
      className='font-medium md:text-semibold lg:font-bold text-xs md:text-sm lg:text-md'>Your Simple Productivity Companion</p>
    </div>
  )
}

export default Header