import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Logo } from './SharedLayout.styled';
import blue_long_1 from '../../images/blue_long_1.svg';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <a href="http://localhost:3000/goit-react-hw-05-movies">
          <Logo src={blue_long_1} alt="logo" />
        </a>
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
