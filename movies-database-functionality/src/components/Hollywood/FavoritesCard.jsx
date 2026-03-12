import React from 'react'
import {FaHeart} from "react-icons/fa"

const FavoritesCard = ({title, director, year, genre}) => {
  return (
    <div className="bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.7)),url('https://png.pngtree.com/thumb_back/fw800/background/20230718/pngtree-cinematic-essentials-clapperboard-film-reel-popcorn-and-3d-glasses-on-a-image_3905897.jpg')] bg-cover bg-center p-4 mt-6 border-2 border-cyan-300 flex flex-col items-center justify-between min-h-[320px] shadow-lg shadow-gray-500 rounded-xl transition-all duration-300 hover:scale-105">
        <div className='flex flex-col items-center mb-2'>
          <h1 className='text-lg font-semibold p-3 text-gray-100'>{title}</h1>
          <FaHeart className='text-red-500'/>
        </div>
        <span className='text-sm font-light text-gray-400 mb-2'>{year}</span>
        <p className='px-3 pb-2 border-b mb-4 w-fit mx-8 text-gray-100 border-[#667eea]'>{director}</p>
        <div className='flex flex-wrap items-center justify-center gap-4 mx-6 mb-3'>
          {genre.map(g => (
          <span className='px-3.5 py-2 shadow-md shadow-gray-500 rounded-xl text-sm bg-[#667eea] text-gray-100'>{g}</span>
          ))}
        </div>
    </div>
  )
}

export default FavoritesCard