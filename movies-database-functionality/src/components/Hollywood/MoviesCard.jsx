import React from 'react'
import {FaHeart, FaRegHeart} from "react-icons/fa"

const MoviesCard = ({id, title, year, director, image, genre, casts, rating, isFavorite, toggleFavorite}) => {
  return (
    <div className='group flex flex-col h-full relative bg-gradient-to-br from-sky-50 via-white to-purple-200 transition-all duration-300 hover:scale-105 hover:shadow-md shadow-gray-600 mt-12 rounded-b-2xl'>
      <div className='aspect-square overflow-hidden'>
        <img
        className='w-full h-full object-cover transition-all duration-300 group-hover:scale-110' 
        src={image} alt={title} />
      </div>
      <div className='text-center pt-2.5 flex flex-col grow'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-sm font-semibold text-gray-800'>{title}</h3>
          <span className='text-xs font-light text-gray-800'>{year}</span>
          <h3 className='font-semibold text-gray-800 text-xs border-b w-fit mx-auto pb-1 mb-1.5'>   {director}</h3>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-x-3 gap-y-2 mb-3'>
          {genre.map(g => (
            <span className='text-xs font-medium bg-gray-300 text-gray-800 px-2 py-1 rounded-xl'>{g}</span>
          ))}
        </div>
        <div className='flex flex-wrap justify-center gap-x-3 gap-y-1.5 items-center mb-3 px-3'>
          {casts.map(actor => (
            <span className='text-xs font-light border-b bg-gray-500 border-[#667eea] text-gray-100 px-2 py-1 rounded-xl '>{actor}</span>
          ))}
        </div>
        
        <div className='mt-auto'>
          <div className='mb-4'>
          <span className={`text-xs font-semibold px-12 py-1.5 rounded-xl shadow-gray-600 shadow-sm ${rating <= 7 && 'bg-amber-400 text-gray-800'} ${rating >= 7 && 'bg-blue-400 text-gray-800'} ${rating >= 9 && 'bg-green-400 text-gray-800'}`}>{rating}</span>
          </div>
          <button
          className={`text-xs mb-3.5 font-semibold px-6 py-1.5 rounded-xl shadow-sm shadow-gray-600 transition-all duration-300 hover:scale-105 cursor-pointer bg-[#667eea] text-gray-100 ${isFavorite ? 'bg-gradient-to-br from-[#667eea] to-[#764ba2]' : 'bg-[#667eea]'}`}
          onClick={() => toggleFavorite(id)}
          >{isFavorite ? (
            <div className='flex items-center justify-center gap-3'>
            <span>Added</span> <FaHeart className='text-red-500 text-lg'/>
            </div>
          ) : (<div className='flex items-center justify-center gap-3'>
                <span>Add</span><FaRegHeart className='text-gray-400 text-lg' />
              </div>
            )}</button>
        </div>
      </div>
    </div>
  )
}

export default MoviesCard