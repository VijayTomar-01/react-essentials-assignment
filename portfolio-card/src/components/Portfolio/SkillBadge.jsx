import React from 'react'

const SkillBadge = ({skill}) => {
  console.log(skill);
  
  return (
    <div className='px-3.5 py-1.5 bg-[#667eea] rounded-xl shadow-gray-500 shadow-sm transition duration-300 hover:scale-105 hover:shadow-md'>
      <span className='text-md font-md text-gray-100'>{skill}</span>
    </div>
  )
}

export default SkillBadge