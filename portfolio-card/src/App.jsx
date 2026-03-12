import { useState } from 'react'
import './App.css'
import PortfolioCard from './components/Portfolio/PortfolioCard';

function App() {

  const [darkTheme, setDarkTheme] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [likes, setLikes] = useState(45);
  const [liked, setLiked] = useState(false)

  const images = [
    'https://images.pexels.com/photos/572861/pexels-photo-572861.jpeg',
    'https://images.pexels.com/photos/1198802/pexels-photo-1198802.jpeg',
    'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
    'https://images.pexels.com/photos/5732461/pexels-photo-5732461.jpeg'
  ]
  
  const skills = ['ReactJs', 'JavaScript', 'Nodejs', 'MongoDb', 'Github', 'TailwindCss', 'C++']

  const handleTheme = () => {
    setDarkTheme(prev => !prev);
  }

  const onNext = () => {
    setImageIndex((prev) => (prev + 1) % images.length)
  }

  const onPrev = () => {
    setImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  const handleLike = () => {
    setLiked(prev => !prev)
    setLikes(prev => prev + 1);
  }

  const handleAlert = () => {
    alert(`Thank you for reaching out to us! 🙏`)
  }

  return (
    <>
      <div className={`min-h-screen p-4 ${darkTheme ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100' : 'bg-gradient-to-br from-sky-50 via-white to-indigo-100 text-gray-800'}`}>
        <div className='flex justify-end items-center mr-6 mt-6 gap-12 font-semibold text-md mb-8'>
          <button
          className={`px-3.5 py-1.5 shadow-md shadow-gray-500 rounded-xl transition-all duration-300 hover:scale-105 ${darkTheme ? 'bg-gray-100 text-gray-800' : 'bg-gray-800 text-gray-100'}`}
          onClick={handleTheme}>Toggle Theme</button>
          <p className='px-3.5 py-1.5'>{darkTheme ? '🌛 Dark Mode' : '🌞 Light Mode'}</p>
        </div>

        <div>
          <PortfolioCard 
          skills={skills}
          liked={liked}
          image={images[imageIndex]}
          totalImages={images.length}
          imageIndex={imageIndex}
          darkTheme={darkTheme}
          likes={likes}
          onNext={onNext}
          onPrev={onPrev}
          handleAlert={handleAlert}
          handleLike={handleLike}
          handleTheme={handleTheme}
          />
        </div>

      </div>
    </>
  )
}

export default App
