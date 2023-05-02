import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: #01b4e4;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orangered;
  }
`;

const BackLink = ({ to, children }) => {
  return (
    // console.log(to),
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};

export default BackLink;

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
};
