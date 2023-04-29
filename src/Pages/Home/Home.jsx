import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'api/api';
import { useEffect, useState } from 'react';
import {
  StyledPosterImg,
  StyledTrendingMoviesSectionUl,
  TrendingSectionHeaderH1,
  StyledTrendingMain,
} from './Home.styled';

const Home = () => {
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
  const [trendingMovies, setTrendingMovies] = useState([]);

  // const getMovies = useCallback(async () => {
  //   setTrendingMovies(await getTrendingMovies());
  // }, []);

  useEffect(() => {
    const getMovies = async () => {
      setTrendingMovies(await getTrendingMovies());
    };
    getMovies();
  }, []);

  const location = useLocation();

  return (
    // console.log(trendingMovies),
    <StyledTrendingMain>
      <TrendingSectionHeaderH1>Trending movies</TrendingSectionHeaderH1>
      <StyledTrendingMoviesSectionUl>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <StyledPosterImg
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={`${movie.original_title}`}
              />
              <p>{movie.original_title || movie.name}</p>
            </Link>
          </li>
        ))}
      </StyledTrendingMoviesSectionUl>
    </StyledTrendingMain>
  );
};

export default Home;
