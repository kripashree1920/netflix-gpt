import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addDetailsOfSelectedMovies } from '../utils/moviesSLice';

const useDetailsOfSelectedMovie = () => {
    const selectedMovieId = useSelector(store=>store?.movies?.selectedMovieId);
    const dispatch = useDispatch()

    const getDetailsOfMovies = async()=>{
        const url = "https://api.themoviedb.org/3/movie/"+selectedMovieId;
        const data = await fetch(url,API_OPTIONS);
        const json = await data?.json();
        dispatch(addDetailsOfSelectedMovies(json))
    }

    useEffect(()=>{
        getDetailsOfMovies()
    },[selectedMovieId])
}

export default useDetailsOfSelectedMovie