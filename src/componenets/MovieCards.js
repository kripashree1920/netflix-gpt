import React from 'react'
import { IMG_CDNURL } from '../utils/constant'

const MovieCards = ({posterURL}) => {
  return (
    <div className='w-40 px-2'>
        <img src={IMG_CDNURL + posterURL} alt="movie cards" />
    </div>
  )
}

export default MovieCards