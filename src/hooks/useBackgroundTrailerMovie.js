import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSLice";

const useBackgroundTrailerMovie = (moviesId) => {
    console.log(moviesId);
    
  const dispatch = useDispatch();

  const GetMovieVedioList = async () => {
    const url = "https://api.themoviedb.org/3/movie/"+moviesId+"/videos";
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    const MovieTrailerList = json.results?.filter(
      (movies) => movies.type === "Trailer"
    );
    const Trailer = MovieTrailerList?.length
      ? MovieTrailerList[0]
      : json.results[0];
      console.log(Trailer);
      

    dispatch(addTrailerVideo(Trailer));
  };

  useEffect(() => {
    GetMovieVedioList();
  }, []);
  return <div></div>;
};

export default useBackgroundTrailerMovie;
