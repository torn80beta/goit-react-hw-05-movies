import {
  StyledMovieCardDiv,
  StyledInfoDiv,
  StyledTitleH2,
  StyledPosterImg,
  StyledRatingDiv,
  StyledAdditionalInfoP,
  StyledGenresUl,
  StyledGenreP,
  StyledPlotP,
} from './MovieCard.styled';
import { TiStarFullOutline } from 'react-icons/ti';

const MovieCard = ({ genres, data }) => {
  const { title, vote_average, overview, release_date, poster_path } = data;
  // console.log(genres);
  return (
    // console.log(data),
    <>
      <StyledMovieCardDiv>
        <StyledPosterImg
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <StyledInfoDiv>
          <StyledTitleH2>{title}</StyledTitleH2>
          <StyledRatingDiv>
            <TiStarFullOutline size="28" fill="orange" />
            <p>{(vote_average * 10).toFixed(2)}%</p>
          </StyledRatingDiv>
          <StyledAdditionalInfoP>Release: {release_date}</StyledAdditionalInfoP>
          <h3>Genres</h3>
          <StyledGenresUl>
            {genres &&
              genres.map(genre => (
                <StyledGenreP key={genre.id}>
                  <p>{genre.name}</p>
                </StyledGenreP>
              ))}
          </StyledGenresUl>
          <div>
            {/* <h3>Plot:</h3> */}
            <StyledPlotP>{overview}</StyledPlotP>
          </div>
        </StyledInfoDiv>
      </StyledMovieCardDiv>
    </>
  );
};

export default MovieCard;
