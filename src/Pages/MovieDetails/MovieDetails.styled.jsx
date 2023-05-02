import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledMovieDetailsMain = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 70%;
  margin: 0px auto 40px;
  gap: 10px;
`;

export const StyledCastRevWrapperUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  border: 1px solid #a0a0a0;
  font-size: 1em;
  padding: 0.4em 1.6em;
  border-radius: 0.4em;
  font-weight: 300;
  text-align: center;
  color: inherit;
  background-color: #1e2428;
  &:hover {
    background-color: #5e7464;
  }
  &:focus {
    background-color: #5e7464;
  }
`;
