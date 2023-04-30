import { useParams, useLocation, Outlet, Link } from 'react-router-dom';
import BackLink from 'components/BackLink/BackLink';
import { getMovieByID } from 'api/api';
import { useEffect, useState } from 'react';
import MovieCard from 'components/MovieCard/MovieCard';
// import { Suspense } from 'react';
// import { StyledMovieCardDiv } from './MovieDetails.styled';

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
    const movieGenres = movie.genres;
    setGenres(movieGenres.map(genre => genre.name).join(', '));
  }, [movie]);

  return (
    <main>
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      <MovieCard genres={genres} data={movie} />
      <ul>
        <li>
          <Link to="cast">Cast: </Link>
        </li>
        <li>
          <Link to="reviews">Reviews: </Link>
        </li>
      </ul>
      {/* <Suspense fallback={<div>Loading subpage...</div>}> */}
      <Outlet />
      {/* </Suspense> */}
    </main>
  );
};

export default MovieDetails;
