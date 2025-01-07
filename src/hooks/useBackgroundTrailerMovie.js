import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addSelectedMovieTrailerTowatch, addTrailerVideo } from "../utils/moviesSLice";

const useBackgroundTrailerMovie = ({moviesId,selectedTrailerToWatch}) => {
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
     
      selectedTrailerToWatch? dispatch(addSelectedMovieTrailerTowatch(Trailer)):dispatch(addTrailerVideo(Trailer));
  };

  useEffect(() => {
    GetMovieVedioList();
  }, []);
};

export default useBackgroundTrailerMovie;
