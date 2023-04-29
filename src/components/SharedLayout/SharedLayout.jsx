import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Logo } from './SharedLayout.styled';
import blue_long_1 from '../../images/blue_long_1.svg';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        {/* <Logo> */}
        <Logo src={blue_long_1} alt="logo" />
        {/* MOVIE DB */}
        {/* </Logo> */}
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
