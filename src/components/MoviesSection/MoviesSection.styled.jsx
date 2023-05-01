import styled from '@emotion/styled';

export const StyledMoviesSectionUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  text-align: center;
  margin-bottom: 50px;
`;

export const StyledMovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 300px;
`;

export const StyledPosterWrapper = styled.div`
  width: 300px;
  height: 450px;
  object-fit: cover;
  /* overflow: hidden; */
`;

export const StyledPosterImg = styled.img`
  width: auto;
  height: 100%;
  transform: scale(1);
  transition: transform 250ms;

  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledMovieTitleP = styled.p`
  color: white;
`;
