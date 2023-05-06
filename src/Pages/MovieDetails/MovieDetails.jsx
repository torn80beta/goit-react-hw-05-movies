import { useParams, useLocation, Outlet } from 'react-router-dom';
import BackLink from 'components/BackLink/BackLink';
import { getMovieByID } from 'api/api';
import { useEffect, useState } from 'react';
import MovieCard from 'components/MovieCard/MovieCard';
import {
  StyledNavLink,
  StyledCastRevWrapperUl,
  StyledMovieDetailsMain,
} from './MovieDetails.styled';
import { Suspense } from 'react';
import { StyledLoadSpinner } from 'utils/LoadSpinner.styled';
import { RotatingLines } from 'react-loader-spinner';
import NotFound from 'Pages/NotFound/NotFound';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? { pathname: '/' };

  useEffect(() => {
    try {
      const getMovie = async () => {
        const response = await getMovieByID(id);
        // console.log(response);
        if (response === 404) {
          setError(true);
          return;
        }
        setMovie(response);
      };
      getMovie();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    if (!movie.genres) {
      return;
    }
    setGenres(movie.genres);
  }, [movie]);

  // console.log(location);
  return (
    console.log(movie),
    (error && <NotFound />) ||
      (movie.id && (
        <StyledMovieDetailsMain>
          <BackLink to={backLinkHref}>Back to movies</BackLink>
          <MovieCard genres={genres} data={movie} />
          <StyledCastRevWrapperUl>
            <li>
              <StyledNavLink
                to="cast"
                state={{ from: backLinkHref, movieid: id }}
              >
                Cast
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink
                to="reviews"
                state={{ from: backLinkHref, movieid: id }}
              >
                Reviews
              </StyledNavLink>
            </li>
          </StyledCastRevWrapperUl>
          <Suspense
            fallback={
              <StyledLoadSpinner>
                <RotatingLines
                  strokeColor="grey"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="96"
                  visible={true}
                />
              </StyledLoadSpinner>
            }
          >
            <Outlet />
          </Suspense>
        </StyledMovieDetailsMain>
      )) || (
        <StyledLoadSpinner>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </StyledLoadSpinner>
      )
  );
};

export default MovieDetails;
