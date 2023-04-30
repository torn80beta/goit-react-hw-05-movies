import { Link, useLocation } from 'react-router-dom';
import {
  StyledMoviesSectionUl,
  StyledPosterImg,
  StyledMovieTitleP,
} from './MoviesSection.styled';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MoviesSection = ({ movies, location }) => {
  return (
    <StyledMoviesSectionUl>
      {movies.map(movie => (
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
    </StyledMoviesSectionUl>
  );
};

export default MoviesSection;
