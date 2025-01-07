

import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addResultOfSearchedMovie } from '../utils/gptSlice';

const useSearchMoviesResults = (searchedMovie) => {
    const dispatch = useDispatch();
    const getSearchMoviesList = async()=>{
        const url ="https://api.themoviedb.org/3/search/movie?query="+searchedMovie+"&include_adult=false?page=1";
        const data = await fetch(url,API_OPTIONS);
        const json = await data?.json();
        const movieTitle = json?.results?.map((movie)=>movie?.title)
        dispatch(addResultOfSearchedMovie({movieTitle: movieTitle ,SearchResultMovieList: json?.results}))
        
    }

    useEffect(()=>{
        if (!searchedMovie?.trim()) return;
        getSearchMoviesList()
    },[searchedMovie])

}

export default useSearchMoviesResults