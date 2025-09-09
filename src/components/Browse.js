import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTVSeries from "../hooks/useTVSeries";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryComponent from "./SecondaryComponent";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  useTVSeries();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryComponent />
    </div>
  );
};

export default Browse;
