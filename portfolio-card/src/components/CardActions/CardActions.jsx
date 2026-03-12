import React, { useState } from 'react'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

const CardActions = ({darkTheme, handleTheme, totalImages, imageIndex, onPrev, onNext, handleLike, likes, liked, handleAlert}) => {


  return (
    <div className='flex flex-wrap justify-evenly items-center pb-4 pt-4 bg-gray-200 rounded-b-2xl'>
      <div className=''>
        <button 
        className={`px-3 font-semibold cursor-pointer text-sm transition hover:scale-105 py-1.5 shadow-md shadow-gray-700 rounded-xl ${darkTheme ? 'bg-gray-100 text-gray-800' : 'bg-gray-800 text-gray-100'}`}
        onClick={handleTheme}>{darkTheme ? '🌛 Dark' : '🌞 Light'}</button>
      </div>
      <div className='flex gap-3 items-center'>
        <button
        className='transition-all duration-300 hover:scale-125 cursor-pointer'
        onClick={onPrev}>◀️</button>
        <p className='text-sm text-gray-700 font-semibold'>{imageIndex + 1} / {totalImages}</p>
        <button
        className='transition-all duration-300 hover:scale-125 cursor-pointer'
        onClick={onNext}>▶️</button>
      </div>
      <div className='flex items-center gap-2'>
        <button 
        className='text-lg transition-all duration-300 hover:scale-125 cursor-pointer'
        onClick={handleLike}
        >{liked ? <AiFillHeart className='text-red-500 transition-all duration-300 scale-110'/> : <AiOutlineHeart className='text-gray-700 transition-all duration-300 scale-110'/>}</button>
        <p className='text-md font-semibold text-gray-700'>{likes}</p>
      </div>
      <div className=''>
        <button
        className='px-3 flex cursor-pointer items-center gap-2 py-1.5 bg-[#667eea] rounded-xl text-gray-100 font-semibold text-sm shadow-sm shadow-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-md'
        onClick={handleAlert}><ion-icon name="chatbubble-outline"></ion-icon>Contact</button>
      </div>
    </div>
  )
}

export default CardActions