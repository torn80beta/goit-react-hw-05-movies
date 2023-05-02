import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledCastEevWrapperUl = styled.ul`
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
  &:hover {
    background-color: #01b4e4;
  }
  &:focus {
    background-color: #01b4e4;
  }
`;
