import { useParams, useLocation, Outlet, NavLink } from 'react-router-dom';
import BackLink from 'components/BackLink/BackLink';
import { getMovieByID } from 'api/api';
import { useEffect, useState } from 'react';
import MovieCard from 'components/MovieCard/MovieCard';
// import { Suspense } from 'react';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState('');
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    try {
      const getMovie = async () => {
        setMovie(await getMovieByID(id));
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
    // console.log(movie.genres);
    // const movieGenres = movie.genres;
    // setGenres(movieGenres.map(genre => genre.name)).join(', ')
    setGenres(movie.genres);
  }, [movie]);

  // console.log(location);
  return (
    <main>
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      <MovieCard genres={genres} data={movie} />
      <ul>
        <li>
          <NavLink to="cast" state={{ from: location.state.from, movieid: id }}>
            Cast:{' '}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="reviews"
            state={{ from: location.state.from, movieid: id }}
          >
            Reviews:{' '}
          </NavLink>
        </li>
      </ul>
      {/* <Suspense fallback={<div>Loading subpage...</div>}> */}
      <Outlet />
      {/* </Suspense> */}
    </main>
  );
};

export default MovieDetails;
