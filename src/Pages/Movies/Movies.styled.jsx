import styled from '@emotion/styled';
import { Field } from 'formik';

export const StyledMoviesMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const StyledInputField = styled(Field)`
  width: 300px;
  padding: 0.7em;
  margin-right: 20px;
  font-size: 0.9em;
  outline: none;
  border-radius: 0.3em;
  background-color: transparent;
  border: 1px solid #a0a0a0;
  color: #fff;

  &:focus {
    border-color: #fff;
  }
`;

export const StyledSearchButton = styled.button`
  font-size: 0.9em;
  padding: 11px 25px;
  border: none;
  outline: none;
  border-radius: 0.3em;
  /* background-color: #ffb92a; */
  color: inherit;
  background-color: #01b4e4;
  cursor: pointer;

  &:hover {
    background-color: #90cea1;
  }
`;
