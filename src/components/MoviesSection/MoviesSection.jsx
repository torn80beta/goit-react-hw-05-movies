import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  StyledMoviesSectionUl,
  StyledPosterImg,
  StyledMovieTitleP,
  StyledMovieWrapper,
  StyledPosterWrapper,
} from './MoviesSection.styled';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MoviesSection = ({ movies, location }) => {
  return (
    // console.log(location),
    <StyledMoviesSectionUl>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <StyledMovieWrapper>
              <StyledPosterWrapper>
                <StyledPosterImg
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={`${movie.original_title}`}
                />
              </StyledPosterWrapper>
              <StyledMovieTitleP>
                {movie.title ||
                  movie.name ||
                  movie.original_name ||
                  movie.original_title}
              </StyledMovieTitleP>
            </StyledMovieWrapper>
          </Link>
        </li>
      ))}
    </StyledMoviesSectionUl>
  );
};

export default MoviesSection;

MoviesSection.propTypes = {
  movies: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};
