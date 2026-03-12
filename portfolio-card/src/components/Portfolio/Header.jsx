import React from 'react'

const Header = () => {

  
  return (
    <div 
    className='text-center rounded-t-2xl  bg-gradient-to-br from-[#667eea] to-[#764ba2] py-6  mx-auto '>
      <h1
      className='font-bold text-3xl text-gray-100'
      style={{textShadow: '2px 4px 6px rgba(0,0,0,0.7)'}}>Developer Portfolio</h1>
      <div className='w-6 h-1 mx-auto mt-2 shadow-sm shadow-gray-300 bg-gray-100'></div>
    </div>
  )
}

export default Header