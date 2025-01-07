import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'

const GptRecomendations = () => {
  const {movieTitle, SearchResultMovieList } = useSelector(store=>store?.gpt)
  return  (
    SearchResultMovieList && (
      <div className='bg-black w-[90%] mx-auto mt-[2%] overflow-hidden relative bg-opacity-50'>
        <div className='relative z-20 p-4  '>
        <MoviesList title={movieTitle} movies={SearchResultMovieList} isSearch={false}/>
        </div>

      </div>
    )

    
  )
}

export default GptRecomendations