import React from 'react'
import VideoDescription from './VideoDescription'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainerTrailer = () => {
   const movies = useSelector(store => store.movies?.nowPlayingMovies);
   if(!movies) return;

   const mainMovie = movies[0];
 
   const {original_title , overview} = mainMovie;
   
   
   

  return (
    <div>
        
   <VideoDescription title = {original_title} overview={overview}/>
   <VideoBackground moviesId={mainMovie?.id}/>

    </div>
  )
}

export default MainContainerTrailer