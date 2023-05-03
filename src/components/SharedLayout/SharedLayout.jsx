import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Link, Logo } from './SharedLayout.styled';
import blue_long_1 from '../../images/blue_long_1.svg';
import { StyledLoadSpinner } from 'utils/LoadSpinner.styled';
import { RotatingLines } from 'react-loader-spinner';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <a href="/goit-react-hw-05-movies">
          <Logo src={blue_long_1} alt="logo" />
        </a>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense
        fallback={
          <StyledLoadSpinner>
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          </StyledLoadSpinner>
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
