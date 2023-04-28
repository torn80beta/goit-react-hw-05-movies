import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Logo } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>MOVIE DB</Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
