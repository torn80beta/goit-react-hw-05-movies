import { getMovieCast } from 'api/api';
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import {
  StyledCastSection,
  StyledActorLi,
  StyledCastUl,
  StyledNoCastNotification,
} from './Cast.styled';

const Cast = () => {
  const location = useLocation();
  const params = useParams();
  const movieId = !location.state ? Number(params) : location.state.movieid;
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    try {
      const getCast = async () => {
        const actors = await getMovieCast(movieId);
        const normalizedCast = actors.filter(actor => actor.profile_path);
        setCast(normalizedCast.slice(0, 14));
      };
      getCast();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  //   console.log(location.state.movieid);
  return (
    // console.log(cast),
    <StyledCastSection>
      {/* <h2>Cast:</h2> */}
      {(!cast.length && (
        <StyledNoCastNotification>
          We are sorry, but we don't have any information about this movie's
          actors
        </StyledNoCastNotification>
      )) || (
        <StyledCastUl>
          {cast.map(person => (
            <StyledActorLi key={person.id}>
              {person.profile_path && (
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${person.profile_path}`}
                    alt={`${person.name}`}
                  />
                  <p>{person.name}</p>
                </div>
              )}
            </StyledActorLi>
          ))}
        </StyledCastUl>
      )}
    </StyledCastSection>
  );
};

export default Cast;
