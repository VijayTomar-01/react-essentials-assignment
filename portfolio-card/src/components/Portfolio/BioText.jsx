import React from 'react'

const BioText = () => {

  const bioText = "Hey! I'm Shyam. I'm currently learning web development through Abc Online faculty and trying to actively build project to Strengthen my skills. This is a Simple Portfolio Card created as part of the practicing the Basics Concepts of WebDev and improving myself."

  return (
    <div className='p-4 text-center '>
        <h3 className='font-semibold mt-4 text-lg text-[#667eea] border-b pb-1 mb-2.5'>About Me</h3>
        <p className='text-md font-medium text-gray-800'>{bioText}</p>
        <p className='text-lg font-semibold mt-3'>Thanks For Stopping by. "Auf Weidersehen!"</p>
      </div>
  )
}

export default BioText