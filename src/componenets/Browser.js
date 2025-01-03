import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainerTrailer from "./MainContainerTrailer";
import SecondaryContainerList from "./SecondaryContainerList";

const Browser = () => {
  useNowPlayingMovies();
  return (
    <div className=" flex justify-between flex-wrap">
      <Header />
      <MainContainerTrailer/>
      <SecondaryContainerList />
    </div>
  );
};

export default Browser;
