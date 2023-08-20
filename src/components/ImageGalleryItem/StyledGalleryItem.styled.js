import styled from 'styled-components';

export const StyledImageItem = styled.li`
  padding: 20px;
  margin: 10px;
  border-bottom: #7277be84 1px solid;
  border-top: #7277be82 1px solid;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  transition: transform 220ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.07);
    border-top: 1px solid rgb(20 158 202);
    border-bottom: 1px solid rgb(20 158 202);
  }
`;

export const StyledItemBottomWrapper = styled.div`
  display: flex;
  margin-top: 14px;
  justify-content: space-between;
  align-items: center;
`;

export const StyledModalImg = styled.img`
  max-width: 100%;
  max-height: 70vh;
  margin-bottom: 10px;
  border-radius: 6px;
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
