import { StyledLoadMoreBtn } from './LoadMoreBtn.styled';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <div>
      <StyledLoadMoreBtn onClick={onClick} type="button">
        Load more
      </StyledLoadMoreBtn>
    </div>
  );
};
