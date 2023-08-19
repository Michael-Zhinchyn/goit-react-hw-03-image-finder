import styled from 'styled-components';

export const StyledLoadMoreBtn = styled.button`
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

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;
