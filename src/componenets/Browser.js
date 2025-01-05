import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainerTrailer from "./MainContainerTrailer";
import SecondaryContainerList from "./SecondaryContainerList";
import usePopularMovies from "../hooks/usePopularMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browser = () => {
  const showGptSearch = useSelector(store => store?.gpt?.gptSearch)
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className=" flex justify-between flex-wrap">
      <Header />
      {
        showGptSearch ? <GptSearch/> :
        <>
        <MainContainerTrailer/>
        <SecondaryContainerList />
        </>
      }

      
    </div>
  );
};

export default Browser;
