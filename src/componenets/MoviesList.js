import React from "react";
import MovieCards from "./MovieCards";

  const MoviesList = ({ title, movies }) => {
    return (
      <div className="w-screen px-2 ">
        <h1 className="text-3xl py-3 text-white">{title}</h1>
        <div className="flex overflow-x-auto">
          <div className="flex">
            {movies?.map((movie) => (
              <MovieCards posterURL={movie?.poster_path} key={movie?.id} />
            ))}
          </div>
        </div>
      </div>
    );
  
  
};

export default MoviesList;
