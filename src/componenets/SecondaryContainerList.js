import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainerList = () => {
  const movies = useSelector((store) => store?.movies);
  const movieCategories = [
    {title:"Now Playing", key :"nowPlayingMovies"},
    {title:"Popular", key :"popularMovies"},
    {title:"Top-Rated", key :"topRatedMovies"},
    {title:"Upcoming", key :"upcomingMovies"}
  ]
  return (
    movies && (
      <div className="bg-black ">
        <div className="relative z-20 -mt-56 pl-12 overflow-x-hidden">
        {movieCategories.map(({ title, key }) => (
            <MoviesList key={key} title={title} movies={movies[key]} isSearch={true}/>
          ))}
        </div>
      </div>
    )
  );
};

export default SecondaryContainerList;
