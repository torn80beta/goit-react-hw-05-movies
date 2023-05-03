import BackLink from 'components/BackLink/BackLink';
import { StyledNotFoundP } from './NotFound.styled';

const NotFound = () => {
  return (
    <>
      <BackLink to={{ pathname: '/' }}>Back to home page</BackLink>
      <StyledNotFoundP>Page not found ¯\_(ツ)_/¯</StyledNotFoundP>
    </>
  );
};

export default NotFound;
