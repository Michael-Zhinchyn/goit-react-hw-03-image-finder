import styled from 'styled-components';

export const StyledGalleryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 15px;
  padding: 15px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
