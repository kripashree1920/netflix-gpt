import React from 'react'
import GptSearchInputBar from './GptSearchInputBar'
import GptRecomendations from './GptRecomendations'
import { LOGIN_BACKROUND } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
           <div className="absolute w-full h-full object-cover -z-20">
                <img
                  src={LOGIN_BACKROUND}
                  alt="Background img"
                  className="w-full h-full object-cover "
                />
              </div>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
             
              <GptSearchInputBar/>
              <GptRecomendations/>
             
     
    </div>
  )
}

export default GptSearch