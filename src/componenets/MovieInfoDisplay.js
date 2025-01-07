import React, { useEffect, useState } from 'react'
import useBackgroundTrailerMovie from '../hooks/useBackgroundTrailerMovie';
import { useSelector } from 'react-redux';
import useDetailsOfSelectedMovie from '../hooks/useDetailsOfSelectedMovie';
import { IMG_CDNURL } from '../utils/constant';

const MovieInfoDisplay = () => {
  useDetailsOfSelectedMovie();

  // useBackgroundTrailerMovie({moviesId: selectedMovie?.id,selectedTrailerToWatch:true});
  const details = useSelector(store=>store?.movies?.detailsOfSelectedMovie)
// const trailerVedioKey = useSelector(store => store?.movies?.selectedTrailerToWatch?.key);
const[moreInfo, setMoreInfo]=useState(false)
  
const movieImg = details?.backdrop_path ? details?.backdrop_path : details?.poster_image
  const handleMoreInfo= ()=>{
  setMoreInfo(!moreInfo)
  }

  if (!details) {

    return (
      <div className="flex justify-center items-center h-screen bg-black text-white">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-full z-20 m-auto bg-black text-white p-4 border border-white rounded-lg absolute">
      <div className="w-1/2 absolute bg-gradient-to-r from-black p-4 bottom-0">
        <h1 className="font-bold text-5xl my-1">{details?.title}</h1>
        {details?.tagline && (
          <h3 className="font-bold text-xl my-2">{details?.tagline}</h3>
        )}
        {moreInfo && <p className="mt-4">{details?.overview}</p>}
        {details?.release_date && (
          <h3 className="font-bold mt-4">
            Released Date:{" "}
            <span className="font-normal">{details?.release_date}</span>
          </h3>
        )}
        <div className="py-5 flex">
          <button className="bg-white text-black text-md px-3 py-2 rounded-md hover:bg-opacity-80">
            <i className="fa-solid fa-play mr-1"></i>Play
          </button>
          <button
            className="bg-gray-500 bg-opacity-50 text-white text-md px-3 py-2 rounded-md ml-4"
            onClick={handleMoreInfo}
          >
            <i className="fa-solid fa-circle-info mr-1"></i>
            {moreInfo ? " Less Info " : "More Info"}
          </button>
        </div>
      </div>

    {movieImg &&  <div className="mt-4">
        <img
          src={IMG_CDNURL + details?.backdrop_path}
          alt="movie cards"
          className="w-full rounded-lg"
        />
      </div>}
    </div>
  );
  
}



export default MovieInfoDisplay