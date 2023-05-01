import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'api/api';
import { useEffect, useState } from 'react';
import { TrendingSectionHeaderH1, StyledTrendingMain } from './Home.styled';
import MoviesSection from 'components/MoviesSection/MoviesSection';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  // const getMovies = useCallback(async () => {
  //   setTrendingMovies(await getTrendingMovies());
  // }, []);

  useEffect(() => {
    const getMovies = async () => {
      setTrendingMovies(await getTrendingMovies());
    };
    getMovies();
  }, []);

  return (
    // console.log(trendingMovies),
    <StyledTrendingMain>
      <TrendingSectionHeaderH1>
        Trending movies of the week
      </TrendingSectionHeaderH1>
      <MoviesSection movies={trendingMovies} location={location} />
    </StyledTrendingMain>
  );
};

export default Home;
