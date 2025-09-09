import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryComponent = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Trending"} movies={movies.trendingMovies} />
        <MovieList title={"Upcoming movies"} movies={movies.upcomingMovies} />
        <MovieList title={"TV Series"} movies={movies.tvSeries} />
      </div>
    </div>
  );
};

export default SecondaryComponent;
