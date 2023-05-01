import { useEffect, useState } from 'react';
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
  StyledMovieCardWrapper,
} from './MovieCard.styled';
import { TiStarFullOutline } from 'react-icons/ti';

const MovieCard = ({ genres, data }) => {
  const { title, vote_average, overview, release_date, poster_path, videos } =
    data;
  const [trailer, setTrailer] = useState('');

  useEffect(() => {
    if (!videos) {
      return;
    }
    const trailers = videos.results;
    const trailerId = trailers[trailers.length - 1].key;
    setTrailer(trailerId);
  }, [videos]);

  return (
    // console.log(data),
    <StyledMovieCardWrapper>
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
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailer}`}
            title="YouTube video player"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h3>Genres</h3>
          <StyledGenresUl>
            {genres &&
              genres.map(genre => (
                <StyledGenreP key={genre.id}>
                  <p>{genre.name}</p>
                </StyledGenreP>
              ))}
          </StyledGenresUl>
        </StyledInfoDiv>
      </StyledMovieCardDiv>
      <div>
        {/* <h3>Plot:</h3> */}
        <StyledPlotP>{overview}</StyledPlotP>
      </div>
    </StyledMovieCardWrapper>
  );
};

export default MovieCard;