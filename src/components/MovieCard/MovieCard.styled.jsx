import styled from '@emotion/styled';

export const StyledMovieCardDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: space-around;
  max-width: 70%;
  padding: 20px 40px 40px;
  margin: 0px auto 40px;
  /* border-bottom: 1px solid black; */
`;

export const StyledPosterImg = styled.img`
  width: 400px;
  border-radius: 15px;
`;

export const StyledInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  gap: 30px;
`;

export const StyledTitleH2 = styled.h2`
  text-align: center;
  font-size: 2em;
  font-weight: 700;
  letter-spacing: 0.06em;
`;

export const StyledRatingDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  letter-spacing: 0.06em;
`;

export const StyledAdditionalInfoP = styled.p`
  display: flex;
  font-size: 0.95em;
  letter-spacing: 0.06em;
  gap: 1em;
  justify-content: center;
  color: #a0a0a0;
  margin: 0.6em 0;
  font-weight: 300;
`;

export const StyledGenresUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const StyledGenreP = styled.li`
  border: 1px solid #a0a0a0;
  font-size: 1em;
  padding: 0.4em 1.6em;
  border-radius: 0.4em;
  font-weight: 300;
`;

export const StyledPlotP = styled.p`
  font-size: 1em;
  font-weight: 400;
  line-height: 1.8em;
  text-align: justify;
  /* color: #a0a0a0; */
  color: white;
`;
