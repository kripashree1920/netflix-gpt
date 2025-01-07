import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/moviesSLice';

const useTopRatedMovies = () => {
 const dispatch = useDispatch();
    const getTopRatedMovies = async()=>{
        const url = "https://api.themoviedb.org/3/movie/top_rated?page=1"
        const data = await fetch(url,API_OPTIONS);
        const json = await data?.json();
        dispatch(addTopRatedMovies(json?.results))
    }

    useEffect(()=>{
        getTopRatedMovies()
    },[])
}

export default useTopRatedMovies;