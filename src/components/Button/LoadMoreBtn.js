import { StyledLoadMoreBtn, StyledButtonWrapper } from './LoadMoreBtn.styled';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <StyledButtonWrapper>
      <StyledLoadMoreBtn onClick={onClick} type="button">
        Load more
      </StyledLoadMoreBtn>
    </StyledButtonWrapper>
  );
};
