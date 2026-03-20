import React from 'react'

const Search = ({searchTerm, setSearchTerm, handleRefresh, filteredMovies, setSelectedGenre, sortBy, setSortBy, darkTheme}) => {


  const genres = ['All', "Sci-Fi", "Action", "Thriller", "Crime", "Drama", "Adventure", "Fantasy", "Biography"]

  return (
    <>
    <div className='flex flex-wrap justify-center items-center gap-x-12 gap-y-6 mt-12'>
      <input
        className='p-2.5 text-sm shadow-md shadow-gray-500 font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-xl'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='Discover e.g., {Avengers}' 
        type="text" />
        <button
        onClick={handleRefresh}
        className='px-3.5 py-1.5 text-sm bg-[#667eea] rounded-xl text-gray-100 shadow-gray-500 shadow-md transition-all duration-300 hover:scale-105 cursor-pointer hover:bg-[#3857e2]'>Refresh</button>
    </div>
    <div className='text-xs font-light text-center mt-4'>
      {searchTerm && (
        <p>Found {filteredMovies.length} movie{filteredMovies.length !== 1 ? 's' : ''} for "{searchTerm}"</p>
      )}
    </div>
    <div className='text-center mt-6'>
      <h1 className='font-semibold text-md w-fit pb-1 border-b-[#667eea] border-b-2 mb-3  mx-auto'>Filter By Genre</h1>
      <div className='flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-6'>
        {genres.map(genre => (
          <button
          key={genre}
          onClick={() => setSelectedGenre(genre)} 
          className='px-3.5 py-1.5 text-xs lg:text-sm rounded-xl cursor-pointer shadow-sm shadow-gray-500 bg-[#667eea] text-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/40 hover:shadow-md hover:bg-[#3857e2]'>{genre}</button>
        ))}
      </div>
    </div>
    <div className={`flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mt-8 shadow-md shadow-gray-500 py-4 max-w-lg mx-auto rounded-xl ${darkTheme ? 'bg-gray-600/70' : 'bg-linear-to-r from-sky-100 via-white to-purple-100'}`}>
      <label className='font-semibold text-sm' htmlFor="sort">Sort-By:</label>
      <select
      className={`px-3.5 py-1.5 text-sm rounded-xl  shadow-md shadow-gray-500 font-medium  cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400 ${darkTheme ? 'bg-gray-600/70' : 'bg-gray-50'}`}
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