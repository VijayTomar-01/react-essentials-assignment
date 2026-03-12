import React from 'react'
import Header from './Header'
import Avatar from './Avatar'
import BioText from './BioText'
import Skills from './Skills'
import CardActions from '../CardActions/CardActions'

const PortfolioCard = ({name, role, image, bioText, skills, totalImages, imageIndex, darkTheme, onNext, onPrev, handleAlert, handleLike, handleTheme, likes, liked}) => {
  return (
    <div className='max-w-[540px] rounded-2xl mx-auto shadow-md shadow-gray-500 transition-all duration-300 hover:scale-105 hover:shadow-lg mb-8'>
      <Header />
      <div>
        <Avatar 
        name={name}
        role={role}
        image={image}/>
      </div>
      <div className='bg-gradient-to-br from-sky-100 via-white to-indigo-100 rounded-b-2xl'>
        <BioText bioText={bioText}/>
        <Skills skills={skills}/>
        <CardActions 
          totalImages={totalImages}
          imageIndex={imageIndex}
          darkTheme={darkTheme}
          likes={likes}
          liked={liked}
          onNext={onNext}
          onPrev={onPrev}
          handleAlert={handleAlert}
          handleLike={handleLike}
          handleTheme={handleTheme}/>
      </div>
      

    </div>
  )
}

export default PortfolioCard