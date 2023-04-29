import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'api/api';
import { useEffect, useState } from 'react';
import {
  StyledPosterImg,
  StyledTrendingMoviesSectionUl,
  TrendingSectionHeaderH1,
  StyledTrendingMain,
  StyledMovieTitleP,
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
              <StyledMovieTitleP>
                {movie.title ||
                  movie.name ||
                  movie.original_name ||
                  movie.original_title}
              </StyledMovieTitleP>
            </Link>
          </li>
        ))}
      </StyledTrendingMoviesSectionUl>
    </StyledTrendingMain>
  );
};

export default Home;
