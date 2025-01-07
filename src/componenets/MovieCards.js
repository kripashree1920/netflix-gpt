import React, { useState } from 'react'
import { IMG_CDNURL } from '../utils/constant'
import MovieInfoDisplay from './MovieInfoDisplay';
import { useDispatch } from 'react-redux';
import { addDetailsOfSelectedMovies, addSelectedMovieId, addSelectedMovieTrailerTowatch } from '../utils/moviesSLice';

const MovieCards = ({posterURL,movie}) => {
  const dispatch = useDispatch()

  
  const [selectedMovieObject, setSelectedMovie] = useState(null);
  if(!posterURL) return;
  const handleShowTrailer=()=>{
    const selectedMovie = movie?.find(movie => movie?.poster_path === posterURL);
    setSelectedMovie(selectedMovie)
    dispatch(addSelectedMovieId(selectedMovie?.id));

  }
  const handleCloseModal = () =>{
     setSelectedMovie(null);
     dispatch(addSelectedMovieId(null));
     dispatch(addDetailsOfSelectedMovies(null))
  }

  return (
    <div>
    <div className='w-40 px-2 cursor-pointer'>
        <img src={IMG_CDNURL + posterURL} alt="movie cards" onClick={handleShowTrailer}/>
    </div>
    {selectedMovieObject && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="p-4 rounded-lg shadow-lg w-3/4 h-3/4 relative flex flex-col">
      <button
        className="absolute top-0 -right-6 bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center z-50"
        onClick={handleCloseModal}
      >
        X
      </button>
      <div className="overflow-auto flex-1">
        <MovieInfoDisplay />
      </div>
    </div>
  </div>
)}

    </div>
  )
}

export default MovieCards