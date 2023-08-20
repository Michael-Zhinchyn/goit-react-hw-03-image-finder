import styled from 'styled-components';

export const StyledSearchForm = styled.form`
  display: flex;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
`;

export const StyledSearchInput = styled.input`
  padding-left: 16px;
  background-color: #23272f;
  width: 100%;
  height: 45px;
  border: 1px solid rgb(20 158 202);
  border-radius: 4px;
  color: white;
  font-size: 19px;
  font-weight: 500;
  outline: none;
`;

export const StyledSearchBtn = styled.button`
  box-sizing: border-box;
  width: 127px;
  height: 45px;
  margin-left: 24px;
  border-radius: 4px;
  background-color: rgb(20 158 202);
  border: 1px solid rgb(20 158 202);
  color: #f8f8f8;
  font-size: 19px;
  font-weight: 500;
  cursor: pointer;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #149ed7;
    border: 1px solid rgb(20 158 202);
    color: #23272f;
  }
`;
