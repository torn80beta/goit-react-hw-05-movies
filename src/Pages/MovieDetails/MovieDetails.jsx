import { useParams, useLocation } from 'react-router-dom';
import BackLink from 'components/BackLink/BackLink';
import { getMovieByID } from 'api/api';
import { useEffect, useState } from 'react';
import { StyledMovieCardDiv } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState('');
  const { id } = useParams();

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

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const { title, vote_average, overview, release_date, poster_path } = movie;

  return (
    <main>
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      <StyledMovieCardDiv>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <div>
          <h2>{title}</h2>
          <p>User score: {(vote_average * 10).toFixed(2)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
          <p>Release Date: {release_date}</p>
        </div>
      </StyledMovieCardDiv>
    </main>
  );
};

export default MovieDetails;
