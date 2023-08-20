import styled from 'styled-components';

export const StyledItemBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledModalImg = styled.img`
  max-width: 100%;
  max-height: 70vh;
  margin-bottom: 8px;
  border-radius: 4px;
`;

export const StyledCloseButton = styled.button`
  box-sizing: border-box;
  width: 107px;
  height: 35px;
  border-radius: 2px;
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

export const StyledImageTag = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
