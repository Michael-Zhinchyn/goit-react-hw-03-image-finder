import styled from 'styled-components';

export const StyledImageItem = styled.li`
  margin: 10px;
  padding: 18px;
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

export const StyledItemImg = styled.img`
  border-radius: 8px;
`;
