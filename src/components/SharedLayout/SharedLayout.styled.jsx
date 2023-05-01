import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  & nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: inherit;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #01b4e4;
    &:hover {
      background-color: #90cea1;
      color: white;
    }
  }

  &:hover {
    color: #90cea1;
  }
`;

export const Logo = styled.img`
  width: 200px;
  margin: 0;
`;
