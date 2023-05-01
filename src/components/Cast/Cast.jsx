import { getMovieCast } from 'api/api';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Cast = () => {
  const location = useLocation();
  const movieId = location.state.movieid;
  const [cast, setCast] = useState([]);

  useEffect(() => {
    try {
      const getCast = async () => {
        const slicedCast = await getMovieCast(movieId);
        setCast(slicedCast.slice(0, 9));
      };
      getCast();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  //   console.log(location.state.movieid);
  return (
    // console.log(cast),
    <section>
      <h2>Cast:</h2>
      <ul>
        {cast.map(person => (
          <li key={person.id}>
            {person.profile_path && (
              <>
                <img
                  src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                  alt={`${person.name}`}
                />
                <p>{person.name}</p>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cast;
