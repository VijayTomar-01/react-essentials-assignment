import React from 'react'
import {FaHeart, FaRegHeart} from "react-icons/fa"

const MoviesCard = ({id, title, year, director, image, genre, casts, rating, isFavorite, toggleFavorite, darkTheme, getRatingColor, favBtnClr}) => {

  return (
    <div className={`group  relative  shadow-sm backdrop-blur-lg bg-opacity-90 transition-all duration-300 hover:scale-[1.02] hover:shadow-md shadow-gray-500 mt-12 ${darkTheme ? 'bg-linear-to-br from-[#1e293b] via-[#2b2f4a] to-[#3b2f5a] ' : 'bg-linear-to-br from-[#f8fafc] via-[#e2e8f0] to-[#dbeafe] '}`}>
      <div className='flex flex-col sm:flex-row gap-4'>
        <div className='w-full md:w-1/3 lg:w-2/5 overflow-hidden'>
        <img
        className='w-full h-62  object-cover transition-all duration-300 group-hover:scale-[1.04]' 
        src={image} alt={title} />
        </div>
      
        <div className='w-full px-4 py-3'>
          <div className='border-b border-gray-400'>
          <h3 className='text-sm md:text-md lg:text-lg font-bold '>{title}</h3>
          <p className='text-sm font-medium pb-2'>{year}</p>
          </div>
          <div className='py-1 md:py-2 lg:py-3 border-b border-gray-400 '>
            <p className='text-xs font-medium'>Director: <span className='font-semibold'>{director}</span></p>
              <div className='flex gap-1.5 pt-1'>
                <p className='text-xs font-medium '>Genre: </p>
                <span className='font-semibold text-xs '>{genre.slice().join(' , ')}</span>
              </div>
          </div>
          <div className='flex gap-1.5 text-xs py-3'>
            <p className='font-medium'>Cast: </p>
            <p className='font-semibold line-clamp-2'>{casts.slice().join(' , ')}</p>
          </div>
          <div className='flex flex-wrap gap-y-2 gap-x-6 md:gap-x-12 lg:gap-x-18 justify-center items-center mt-3 '>
            <p className={`rounded-lg px-6 py-1.5 text-sm shadow-sm ${getRatingColor(rating)}`}>⭐ <span className={`pl-3 text-gray-100`}>{rating}</span></p>
            <button
            className={`shadow-sm text-sm transition-all duration-300 hover:shadow-md hover:scale-[1.03] px-3.5 py-1.5 rounded-lg ${favBtnClr(isFavorite)}`}
            onClick={() => toggleFavorite(id)}>
              {isFavorite 
              ? (
                <div className='flex items-center gap-2'>
                  <FaHeart className='text-gray-100 text-sm'/>
                  <p>Favorited</p>
                </div>
              ) : (
                <div className='flex items-center gap-2'> 
                  <FaHeart className='text-gray-100 text-sm'/>
                  <p>Favorite</p>
                </div>
              )} 
            </button>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default MoviesCard