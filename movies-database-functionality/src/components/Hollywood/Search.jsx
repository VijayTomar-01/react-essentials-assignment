import React from 'react'

const Search = ({searchTerm, setSearchTerm, handleRefresh, filteredMovies, setSelectedGenre, sortBy, setSortBy, }) => {


  const genres = ['All', "Sci-Fi", "Action", "Thriller", "Crime", "Drama", "Adventure", "Fantasy", "Biography"]

  return (
    <>
    <div className='flex flex-wrap justify-center items-center gap-12 mt-12'>
      <input
        className='p-2.5 text-md shadow-md shadow-gray-500 font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-xl'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='Discover e.g., {Avengers}' 
        type="text" />
        <button
        onClick={handleRefresh}
        className='px-3.5 py-1.5 bg-[#667eea] rounded-xl text-gray-100 shadow-gray-500 shadow-md transition-all duration-300 hover:scale-105 cursor-pointer'>Refresh</button>
    </div>
    <div className='text-md font-semibold text-center mt-4'>
      {searchTerm && (
        <p>Found {filteredMovies.length} movie{filteredMovies.length !== 1 ? 's' : ''} for "{searchTerm}"</p>
      )}
    </div>
    <div className='text-center mt-6'>
      <h1 className='font-semibold text-lg w-fit pb-1 border-b-[#667eea] border-b-2 mb-3  mx-auto'>Filter By Genre</h1>
      <div className='flex flex-wrap items-center justify-center gap-8 mt-6'>
        {genres.map(genre => (
          <button
          key={genre}
          onClick={() => setSelectedGenre(genre)} 
          className='px-3.5 py-1.5 rounded-xl cursor-pointer shadow-md shadow-gray-500 bg-[#667eea] text-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/40'>{genre}</button>
        ))}
      </div>
    </div>
    <div className='flex flex-wrap justify-center items-center gap-6 mt-8'>
      <label className='font-semibold text-md' htmlFor="sort">Sort-By:</label>
      <select
      className='px-3.5 py-1.5 rounded-xl bg-white shadow-md shadow-gray-500 font-medium text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400'
      value={sortBy} 
      onChange={(e) => setSortBy(e.target.value)}
      name="" id="">
        <option value="title">Title (A-Z)</option>
        <option value="rating">Rating (High - Low)</option>
        <option value="year">Year (Newest)</option>
        <option value="genre">Genre (A-Z)</option>
      </select>
    </div>
    </>
  )
}

export default Search