import React, { useMemo, useState } from 'react'
import { hollywoodMovies } from '../Movies/movies'
import Search from './Search';
import MoviesCard from './MoviesCard';
import FavoritesCard from './FavoritesCard';

const ExploreMovies = () => {

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

  const addedToFavorite = useMemo(() => {
    return movies.filter(movie => favorites.includes(movie.id));
  }, [movies, favorites])

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      if(prev.includes(id)){
        return prev.filter(movieId => movieId !== id)
      }
      return [...prev, id];
    })
  }

  return (
    <div>
      <div className='bg-gradient-to-br from-[#667eea] to-[#764ba2] text-center py-8 mt-8'>
        <h1 
        className='text-4xl text-gray-100 font-bold mb-3'
        style={{textShadow: '2px 4px 6px rgba(0,0,0,0.7)'}}>Explore Movies</h1>
        <p
        className='text-md text-gray-100'
        style={{textShadow: '2px 4px 6px rgba(0,0,0,0.7)'}}>Dive into the world of Cinema.</p>
      </div>
      <div className=''>
        <Search 
        sortBy={sortBy}
        setSortBy={setSortBy}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        filteredMovies={filteredMovies}
        handleRefresh={handleRefresh}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}/>
      </div>
      <div className='grid grid-cols-2 gap-8 mt-12 pb-16'>
        <div className='text-center'>
          {(searchTerm || selectedGenre !== "All") && (
            <h2 className='font-semibold text-md py-1.5 px-3.5 w-fit mx-auto text-gray-100 rounded-xl mb-3 shadow-md shadow-gray-600 bg-[#667eea]'>Matching Results</h2>
          )}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ml-8 mb-8'>
        {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => (
            <div className=''>
              <MoviesCard
              toggleFavorite={toggleFavorite}
              isFavorite={favorites.includes(movie.id)} 
              key={movie.id} {...movie}/>
            </div>
          ))
        ) : (
          <div className='col-span-full py-12'>
            <p className='text-xl font-semibold pb-4'>No Movies Found</p>
            <p className='text-lg font-medium'>{searchTerm || selectedGenre !== 'All' ? "Try adjusting your search filter criteria" : "Start searching to find amazing movies!"}</p>
          </div>
        )}
      </div>
        </div>
      <div>
        <h3 className='font-semibold text-md py-1.5 px-3.5 w-fit mx-auto text-gray-100 rounded-xl mb-3 shadow-md shadow-gray-600 bg-[#667eea] '>Your Favorites</h3>
        {favorites.length > 0 ? (
          <div className="flex flex-wrap items-center justify-evenly ">
            {addedToFavorite.map(movie => (
              <FavoritesCard key={movie.id} {...movie}/>
            ))}
          </div>
        ) : (
          <div className='text-center mt-8'>
            <p className='font-semibold text-xl'>No Favorite Movies Yet...let the Binge Begin! 🍿</p>
          </div>
        )}
      </div>
      </div>
    </div>
  )
}

export default ExploreMovies