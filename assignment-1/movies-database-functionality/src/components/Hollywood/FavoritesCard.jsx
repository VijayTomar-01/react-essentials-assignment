import React from 'react'
import {FaHeart} from "react-icons/fa"

const FavoritesCard = ({title, getRatingColor, year, genre, image, darkTheme, rating}) => {
  return (
    <div className={`grid grid-cols-5 justify-between mb-3 shadow-sm shadow-gray-500 transition-all duration-300 hover:scale-[1.03] ${darkTheme ? 'bg-linear-to-br from-[#1e293b] via-[#2b2f4a] to-[#3b2f5a]' : 'bg-linear-to-br from-[#f8fafc] via-[#e2e8f0] to-[#dbeafe]'}`}>
      <div className='w-full col-span-1'>
        <img
        className='w-25 h-25 object-cover' 
        src={image} alt={title} />
      </div>
      <div className='pl-4 col-span-4'>
        <div className='mt-2 grid grid-cols-5'>
          <div className='col-span-4'>
            <p className='font-bold text-[12px]'>{title}</p>
            <p className='font-medium text-[10px]'>{year}</p>
          </div>
            <FaHeart className='text-red-500 text-sm col-span-1'/>
        </div>
        <div className='flex mt-3 gap-x-6 gap-y-1 justify-center items-center flex-wrap mb-1'>
          <span className={`text-[10px] transition-all duration-300 hover:scale-[1.03] shadow-sm px-2 py-0.5 rounded-sm ${getRatingColor(rating)}`}>{rating}</span>
          <div className='text-[10px]  flex flex-wrap gap-2 '>{genre.map((g, index) => (
            <span 
            className='shadow-m transition-all duration-300 hover:scale-[1.03] shadow-gray-500 px-2 py-0.5 rounded-sm bg-gray-500/70 text-gray-100'
            key={index}>{g}</span>
          ))}</div>
        </div>
      </div>
    </div>
  )
}

export default FavoritesCard