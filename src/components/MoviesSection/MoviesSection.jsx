import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  StyledMoviesSectionUl,
  StyledPosterImg,
  StyledMovieTitleP,
  StyledMovieWrapper,
  StyledPosterWrapper,
} from './MoviesSection.styled';
import no_poster_cr from '../../images/no_poster_cr.jpg';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300';

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
                  src={
                    (movie.poster_path &&
                      `${IMAGE_BASE_URL}${movie.poster_path}`) ||
                    no_poster_cr
                  }
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
