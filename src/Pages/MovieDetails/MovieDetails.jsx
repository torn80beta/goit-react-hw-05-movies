import { useParams, useLocation } from 'react-router-dom';
import BackLink from 'components/BackLink/BackLink';
import { getMovieByID } from 'api/api';
import { useEffect, useState } from 'react';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      setMovie(await getMovieByID(id));
    };
    getMovie();
  }, [id]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  return (
    console.log(movie),
    (
      <main>
        <BackLink to={backLinkHref}>Back to movies</BackLink>
      </main>
    )
  );
};

export default MovieDetails;
