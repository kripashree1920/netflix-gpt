import React from 'react'

const VideoDescription = ({title, overview}) => {
  return (
    <div className='pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='text-6xl font-bold p-2'>{title}</h1>
      <p className='w-1/3 p-2 text-lg'>{overview}</p>

      <div className='p-2'>
        <button className='bg-white text-black text-lg px-5 py-2 rounded-md hover hover:bg-opacity-80'><i className="fa-solid fa-play mr-2"></i>Play</button>
        <button className='bg-gray-500 bg-opacity-50 text-white text-lg px-5 py-2 rounded-md ml-4' ><i className="fa-solid fa-circle-info mr-2"></i>More Info</button>
      </div>
    </div>
  )
}

export default VideoDescription