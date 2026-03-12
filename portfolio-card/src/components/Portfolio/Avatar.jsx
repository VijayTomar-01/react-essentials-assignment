import React from 'react'

const Avatar = ({image}) => {

  const name = 'Vijay Singh Tomar';

  const role = 'Frontend and Backend Developer';

  return (
    <div className="gap-3 flex justify-evenly items-center bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.4)),url('https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg')] bg-cover bg-center ">
      <div className='py-12'>
        <img 
        className='w-[135px] h-[135px] border-2 border-cyan-400 transition-all duration-300 hover:scale-110 rounded-full object-cover '
        src={image} 
        alt={name} />
      </div>
      <div className='text-gray-100 text-center'>
        <h3 className='font-semibold text-lg pb-1.5 transition hover:scale-110'>{name}</h3>
        <p className='font-light text-md transition hover:scale-110'>{role}</p>
      </div>
    </div>
  )
}

export default Avatar