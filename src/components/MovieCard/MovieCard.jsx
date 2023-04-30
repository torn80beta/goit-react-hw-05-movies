import { StyledMovieCardDiv } from './MovieCard.styled';

// {
//   data: { poster_path, title, vote_average, overview, genres, release_date },
// }

const MovieCard = ({ genres, data }) => {
  const { title, vote_average, overview, release_date, poster_path } = data;

  return (
    // console.log(data),
    <StyledMovieCardDiv>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
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
  );
};

export default MovieCard;
