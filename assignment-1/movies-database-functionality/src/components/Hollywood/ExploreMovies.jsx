import React, { useMemo, useState } from 'react'
import { hollywoodMovies } from '../Movies/movies'
import Search from './Search';
import MoviesCard from './MoviesCard';
import FavoritesCard from './FavoritesCard';

const ExploreMovies = ({darkTheme}) => {

  const [movies, setMovies] = useState(hollywoodMovies);
  const [selectedGenre, setSelectedGenre] = useState('All')
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [sortBy, setSortBy] = useState('title')

  const handleRefresh = () => {
    setSearchTerm('');
    setSelectedGenre('All');
  }

  const filteredMovies = useMemo(() => {

    const search = searchTerm.toLowerCase();

    const filtered = movies.filter(movie => {

      const matchesSearch = movie.title.toLowerCase().includes(search) ||
      movie.year.toString().includes(search) ||
      movie.director.toLowerCase().includes(search) ||
      movie.genre.some(g => g.toLowerCase().includes(search)) ||
      movie.casts.some(actor => actor.toLowerCase().includes(search))

      const matchesGenre = selectedGenre === "All" || movie.genre.includes(selectedGenre)

      return matchesSearch && matchesGenre;
    })

    return filtered.sort((a,b) => {
      switch(sortBy){
        case 'rating':
          return b.rating - a.rating;
        case 'year':
          return b.year - a.year;
        case 'genre':
          return a.genre[0].localeCompare(b.genre[0]);
        case 'title':
          default:
            return a.title.localeCompare(b.title);
      }
    })
  }, [movies, searchTerm, selectedGenre, sortBy])

  // contains favorite movies and renders memoized
  const addedToFavorite = useMemo(() => {
    return movies.filter(movie => favorites.includes(movie.id));
  }, [movies, favorites])

  // toggles with only id rather than the whole movie object causes fast rendering
  // eg., stores id 1,2,3 in [0,1,2] as index 
  const toggleFavorite = (id) => {
    setFavorites(prev => {
      if(prev.includes(id)){
        return prev.filter(movieId => movieId !== id)
      }
      return [...prev, id];
    })
  }

  const getRatingColor = (rating) => {
    if(rating <= 6) return `  transition-all duration-300 shadow-red-500  ${darkTheme ? ' bg-red-700/30 hover:bg-red-700/80' : ' bg-red-900/60 hover:bg-red-700/80'}`;
    if(rating > 6 && rating <= 8) return ` shadow-amber-500  transition-all duration-300 ${darkTheme ? 'bg-amber-700/30 hover:bg-amber-600/80' : 'bg-amber-700/60 hover:bg-amber-600/90'}`
    if(rating > 8) return `shadow-green-500 bg-green-700/60 transition-all duration-300 hover:bg-green-700/80 ${darkTheme ? 'bg-green-800/40 ' : 'bg-green-700/40 hover:bg-green-700/70'}`
  }

  const favBtnClr = (isFavorite) => {
    return isFavorite 
    ? ` ${darkTheme ? 'bg-red-700/80 text-gray-100 hover:bg-red-700/50' : 'bg-red-700/80 text-gray-100 hover:bg-red-700/60'}`
    : `${darkTheme ? 'bg-gray-600/90 ' : 'bg-gray-400 text-gray-100'} hover:shadow-md shadow-gray-500 transition-all duration-300`
  }

  return (
    <div className='px-12'>
      <div className='bg-linear-to-br from-[#667eea] to-[#764ba2] text-center py-6 mt-8 rounded-2xl'>
        <h1 
        className='text-3xl text-gray-100 font-bold mb-3'
        style={{textShadow: '2px 4px 6px rgba(0,0,0,0.7)'}}>Explore Movies</h1>
        <p
        className='text-sm text-gray-100'
        style={{textShadow: '2px 4px 6px rgba(0,0,0,0.7)'}}>Dive into the world of Cinema.</p>
      </div>
      <div className=''>
        <Search 
        darkTheme={darkTheme}
        sortBy={sortBy}
        setSortBy={setSortBy}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        filteredMovies={filteredMovies}
        handleRefresh={handleRefresh}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}/>
      </div>
      <div className='grid grid-cols-1 min-[820px]:grid-cols-5 gap-4 mt-8 pb-10 '>
        
        <div className='min-[820px]:col-span-3'>
          {(searchTerm || selectedGenre !== "All") ? (
            <h2 className='font-semibold text-sm py-1.5 px-3.5 w-fit mx-auto text-center text-gray-100 rounded-xl  shadow-md shadow-gray-600 bg-[#667eea]'>Matching Results</h2>
          ) : (
            <h1 className='font-semibold text-sm py-1.5 px-3.5 w-fit mx-auto text-center text-gray-100 rounded-xl shadow-md shadow-gray-600 bg-[#667eea]'>All Movies</h1>
          )}
            <div className='flex flex-col '>
        {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => (
            <div className='w-full max-w-2xl'>
              <MoviesCard
              darkTheme={darkTheme}
              toggleFavorite={toggleFavorite}
              isFavorite={favorites.includes(movie.id)} 
              getRatingColor={getRatingColor}
              favBtnClr={favBtnClr}
              key={movie.id} {...movie}/>
            </div>
          ))
        ) : (
          <div className='py-12'>
            <p className='text-xl font-semibold pb-4'>No Movies Found</p>
            <p className='text-md font-medium'>{searchTerm || selectedGenre !== 'All' ? "Try adjusting your search filter criteria" : "Start searching to find amazing movies!"}</p>
          </div>
        )}
      </div>
      </div>
      <div className='min-[820px]:col-span-2 min-[820px]:border-l-2 min-[820px]:border-gray-400 min-[820px]:pl-6 '>
        <h3 className='font-semibold text-sm py-1.5 px-3.5 w-fit mx-auto text-gray-100 rounded-xl shadow-md shadow-gray-600 bg-[#667eea] text-center mb-10'>Your Favorites</h3>
        {favorites.length > 0 ? (
          <div className="pt-2 max-w-2xl">
            {addedToFavorite.map(movie => (
              <FavoritesCard 
              getRatingColor={getRatingColor} 
              darkTheme={darkTheme} 
              key={movie.id} {...movie}/>
            ))}
          </div>
        ) : (
          <div className='text-center mt-8'>
            <p className='font-semibold text-lg'>No Favorite Movies Yet...let the Binge Begin! 🍿</p>
          </div>
        )}
      </div>
      </div>
      
    </div>
  )
}

export default ExploreMovies